// LIKE / DISLIKE POSTS
function like(postId) {
    const likeCount = $('#like-count');
    const likeBtn = $('#like-btn');
    
    $.ajax({
        url: `/like-post/${postId}`,
        method: 'GET',
        dataType: 'json'
    }).done((data) => {
          likeCount.text(data['likes']);
          if(data['liked']) {
                likeBtn.toggleClass('fas', true);
                likeBtn.toggleClass('far', false);
          }
          else {
                likeBtn.toggleClass('fas', false);
                likeBtn.toggleClass('far', true);
          }
      });
}