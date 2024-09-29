const pegaDados = () => {
    const response = fetch('http://api.github.com/users/alcenirdev08').then((res,)=> {
        return res.json()
    }).then((repos)=> {
        console.log(repos)
    })

    console.log(response)
}
pegaDados()