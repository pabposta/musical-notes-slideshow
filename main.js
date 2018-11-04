var app = angular.module('Notes', []);
app.controller('NotesCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    let ctrl = this;

    ctrl.tempo = 60;
    ctrl.notes = [
        'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'A', 'A', 'B', 'B',
        'C#', 'D#', 'F#', 'G#', 'A#',
        'Db', 'Eb', 'Gb', 'Ab', 'Bb'
    ];
    ctrl.isMetronomeOn = false;
    ctrl.metronomeSound = new Audio('MetroBar1.wav');
    ctrl.isClickOn = false;
    ctrl.clickSound = new Audio('Click1.wav');

    $scope.$on('$destroy', () => $timeout.cancel(ctrl.timer));

    function nextNote () {
        ctrl.note =  ctrl.notes[Math.floor(Math.random() * ctrl.notes.length)];
        if (ctrl.isMetronomeOn) ctrl.metronomeSound.play();
        if (ctrl.isClickOn) ctrl.clickSound.play();
        ctrl.timer = $timeout(nextNote, 60000 / ctrl.tempo);
    }

    nextNote();
}]);
