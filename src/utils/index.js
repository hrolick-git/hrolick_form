const addPost = (values) => {
    fetch(window.location.href.replace('/careers/application-form/', '') + '/wp-json/wp/v2/form-submissions ',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': 'Basic ' + btoa('client:vYKj An3z hymT XgyL F5Ne 80a8')
        },
        body:JSON.stringify(values)
    }).then(function(response){
        return response.json()
    }).then(function(post){
        console.log(post)
    });
}

export { addPost };