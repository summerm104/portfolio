// DISPLAY CHECKED RATING STARS
$(document).ready(function() {
    const stars = $(".rating-stars i");
    const ratingScore = $("#rating-score");

    jQuery.each(stars, (clickedIdx, star) => {
        star.addEventListener("click", () => {
            jQuery.each(stars, (otherIdx, otherStar) => {
                if (otherIdx <= clickedIdx) {
                    otherStar.classList.add("active-star");
                }
                else if (otherStar.classList.remove("active-star")) {
                    otherStar.classList.remove("active-star");
                }
            });
            ratingScore.val(clickedIdx + 1);
        });
    });
});

// Code to disable form submissions if there are invalid fields
// taken from Bootstrap
// accessed 17-01-2022
// https://getbootstrap.com/docs/4.0/components/forms/#validation
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
// end of referenced code.

// DELETE A COMMENT
function deleteComment(comment_id) {
    const commentRecord = $(`#comment-${comment_id}`);
    const commentCount = $('#comment-count');

    $.ajax({
        url: `/delete-comment/${comment_id}`,
        method: 'GET',
        dataType: 'json'
    }).done((data) => {
        commentCount.text(data['comment_count']);
        commentRecord.remove();
      });
}

// SHOW COLLAPSED COMMENTS AFTER CREATING A NEW COMMENT
$(document).ready(function() {
    let current_href = window.location.href.split("/").pop();
    let regex = /#accordionComment$/;
    if (regex.test(current_href)) {
        $('#comments').addClass('show');
        $('#commentHeading button').removeClass('collapsed');
        $('#commentHeading button').attr('aria-expanded', 'true');
    }
});

// DISPLAY AVERAGE RATING SCORE
$(document).ready(function() {
    const aveRating = Number($('#number-rating').text());
    const totalRating = 5;
    const starPercentage = (aveRating/totalRating) * 100;
    const starPercentageRounded = `${Math.round(starPercentage/10) * 10}%`;
    $('.star-inner').css('width', starPercentageRounded);
});