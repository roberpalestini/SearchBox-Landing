export const getDesafio = async () => {
    const url = 'http://desafiogt.aei.gt:9200/publicacion_id/_search?q=NOG%20CONCURSO:15140555'
    await fetch(url)
    .then(async response => {
        const data = await response.json();
        console.log (data)
        return data
    })
}
