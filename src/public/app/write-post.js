$('#submitButn').click(function(){
    console.log("button was clicked")
    const userId = JSON.parse(window.localStorage.user).id;
    const body = $('#body')[0].value
    const title = $('#newTopic')[0].value
    if(!body || !title){
        alert('Please provide Correct value')
    }else{
        console.log(userId)
        console.log(body)
        console.log(title)
        $.post('/api/posts/',{userId,body,title})
        alert('posted')
        $.get('/api/posts/',{})
    }
    }
)