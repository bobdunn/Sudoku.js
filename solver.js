var myApp = angular.module('myApp',[]);
var board=[];
var colorIndex=0;

myApp.controller('SudokuController', ['$scope', function($scope) {
  for(var row=1;row<10;row++)
  for(var col=1;col<10;col++){
      board.push({row:row,column:col,value:null, possibleValues:[1,2,3,4,5,6,7,8,9], color:'white'});
  }
  $scope.board=_.groupBy(board, function(cell){return cell.row;});
  $scope.board=board;


  $scope.iterate=function(){
    var unsolvedCells=_.filter(board, function(c){return !!!c.value;});

    for (var cell of unsolvedCells) {
      eliminate(cell, function(thisCell){return cell.row==thisCell.row});
      eliminate(cell, function(thisCell){return cell.column==thisCell.column});
      eliminate(cell, function(thisCell){
        return Math.ceil(cell.row/3)==Math.ceil(thisCell.row/3) &&
               Math.ceil(cell.column/3)==Math.ceil(thisCell.column/3)
        });
      if(cell.possibleValues.length==1){
        cell.value=cell.possibleValues[0].toString();
        cell.solved=true;
        cell.color=colors[colorIndex];
      }
    }
    colorIndex++;
  }

  var eliminate=function(cell, predicate){
    var row = _.filter(board,predicate);
    for (var i=cell.possibleValues.length-1;i>=0; i--) {
      if(_.filter(row,{value:cell.possibleValues[i].toString()}).length>0){
        cell.possibleValues.splice(i,1);
      }
    }
  }
}]);


var colors=['AliceBlue',
'AntiqueWhite',
'Aqua',
'Aquamarine',
'Azure',
'Beige',
'Bisque',
'Black',
'BlanchedAlmond',
'Blue',
'BlueViolet',
'Brown',
'BurlyWood',
'CadetBlue',
'Chartreuse',
'Chocolate',
'Coral',
'CornflowerBlue',
'Cornsilk',
'Crimson',
'Cyan',
'DarkBlue',
'DarkCyan',
'DarkGoldenRod',
'DarkGray',
'DarkGreen',
'DarkKhaki',
'DarkMagenta',
'DarkOliveGreen',
'DarkOrange',
'DarkOrchid',
'DarkRed',
'DarkSalmon',
'DarkSeaGreen',
'DarkSlateBlue',
'DarkSlateGray',
'DarkTurquoise',
'DarkViolet',
'DeepPink',
'DeepSkyBlue',
'DimGray',
'DodgerBlue',
'FireBrick',
'FloralWhite',
'ForestGreen',
'Fuchsia',
'Gainsboro',
'GhostWhite',
'Gold',
'GoldenRod',
'Gray',
'Green',
'GreenYellow',
'HoneyDew',
'HotPink',
'IndianRed ',
'Indigo ',
'Ivory',
'Khaki',
'Lavender',
'LavenderBlush',
'LawnGreen',
'LemonChiffon',
'LightBlue',
'LightCoral',
'LightCyan',
'LightGoldenRodYellow',
'LightGray',
'LightGreen',
'LightPink',
'LightSalmon',
'LightSeaGreen',
'LightSkyBlue',
'LightSlateGray',
'LightSteelBlue',
'LightYellow',
'Lime',
'LimeGreen',
'Linen',
'Magenta',
'Maroon',
'MediumAquaMarine',
'MediumBlue',
'MediumOrchid',
'MediumPurple',
'MediumSeaGreen',
'MediumSlateBlue',
'MediumSpringGreen',
'MediumTurquoise',
'MediumVioletRed',
'MidnightBlue',
'MintCream',
'MistyRose',
'Moccasin',
'NavajoWhite',
'Navy',
'OldLace',
'Olive',
'OliveDrab',
'Orange',
'OrangeRed',
'Orchid',
'PaleGoldenRod',
'PaleGreen',
'PaleTurquoise',
'PaleVioletRed',
'PapayaWhip',
'PeachPuff',
'Peru',
'Pink',
'Plum',
'PowderBlue',
'Purple',
'RebeccaPurple',
'Red',
'RosyBrown',
'RoyalBlue',
'SaddleBrown',
'Salmon',
'SandyBrown',
'SeaGreen',
'SeaShell',
'Sienna',
'Silver',
'SkyBlue',
'SlateBlue',
'SlateGray',
'Snow',
'SpringGreen',
'SteelBlue',
'Tan',
'Teal',
'Thistle',
'Tomato',
'Turquoise',
'Violet',
'Wheat',
'White',
'WhiteSmoke',
'Yellow',
'YellowGreen'];
