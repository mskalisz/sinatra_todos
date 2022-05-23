$(function() {

  $("form.delete").sumbit(function(event) {
    event.preventDefualt();
    event.stopPropagation();

    var ok = confirm("Are you sure? This cannot be undone!")
    if (ok) {
      this.submit();
    }

  });

});