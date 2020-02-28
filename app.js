window.onload = function() {
    document.getElementById('notelink').onclick = function() {
        var menu = document.getElementById('note');
        if(note.className != 'shownote') {
            note.className = 'shownote';
        }
        else {
            note.className = 'hiddennote';
        }
    }
}
