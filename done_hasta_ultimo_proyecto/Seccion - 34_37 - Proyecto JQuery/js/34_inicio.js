$(document).ready(function () {
    //Slider
    $('.slider').bxSlider({
        mode: 'fade',
        captions: false,
        speed: 500,
        startSlide: 0,
        responsive: true,
        auto: true,
        pager: true
    });



    //Posts
    var posts_id = $('#posts');
    var posts_array_json = [
        {
            title: "Prueba de titulo 1",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aliquam delectus dolore amet
    ab ad explicabo accusamus natus voluptatem, error harum architecto facere, eius blanditiis
    ratione odit cumque asperiores enim.
    Aliquam eligendi, sapiente, corporis illo amet laborum veniam voluptate ullam doloremque maxime
    quis.Voluptatem eveniet quidem, numquam corporis veniam cumque nihil molestias optio iusto
    laudantium reprehenderit asperiores! Eos, error animi.
    Eum aut, blanditiis commodi maiores sapiente recusandae sit quia atque, id reiciendis repellat
    consequatur aliquam hic, magnam doloribus nemo! Quo error impedit, qui mollitia itaque magni
    ducimus saepe incidunt laborum?
    Temporibus, rem.Fuga, dignissimos id.Nisi rem, nobis hic non obcaecati, tenetur animi maxime
    dignissimos placeat ea ratione voluptate ipsum suscipit ab eius? Omnis amet optio ad animi
    fugiat hic.
    Molestias sapiente dolorum nobis a nisi saepe! Tenetur perferendis, cupiditate vel perspiciatis
    officia culpa iusto, ipsum, nihil ipsam doloremque nemo dolorem minima? Deleniti vel provident
    mollitia.Voluptatem excepturi magni harum.`
        },
        {
            title: "Prueba de titulo 2",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aliquam delectus dolore amet
    ab ad explicabo accusamus natus voluptatem, error harum architecto facere, eius blanditiis
    ratione odit cumque asperiores enim.
    Aliquam eligendi, sapiente, corporis illo amet laborum veniam voluptate ullam doloremque maxime
    quis.Voluptatem eveniet quidem, numquam corporis veniam cumque nihil molestias optio iusto
    laudantium reprehenderit asperiores! Eos, error animi.
    Eum aut, blanditiis commodi maiores sapiente recusandae sit quia atque, id reiciendis repellat
    consequatur aliquam hic, magnam doloribus nemo! Quo error impedit, qui mollitia itaque magni
    ducimus saepe incidunt laborum?
    Temporibus, rem.Fuga, dignissimos id.Nisi rem, nobis hic non obcaecati, tenetur animi maxime
    dignissimos placeat ea ratione voluptate ipsum suscipit ab eius? Omnis amet optio ad animi
    fugiat hic.
    Molestias sapiente dolorum nobis a nisi saepe! Tenetur perferendis, cupiditate vel perspiciatis
    officia culpa iusto, ipsum, nihil ipsam doloremque nemo dolorem minima? Deleniti vel provident
    mollitia.Voluptatem excepturi magni harum.`
        },
        {
            title: "Prueba de titulo 3",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aliquam delectus dolore amet
    ab ad explicabo accusamus natus voluptatem, error harum architecto facere, eius blanditiis
    ratione odit cumque asperiores enim.
    Aliquam eligendi, sapiente, corporis illo amet laborum veniam voluptate ullam doloremque maxime
    quis.Voluptatem eveniet quidem, numquam corporis veniam cumque nihil molestias optio iusto
    laudantium reprehenderit asperiores! Eos, error animi.
    Eum aut, blanditiis commodi maiores sapiente recusandae sit quia atque, id reiciendis repellat
    consequatur aliquam hic, magnam doloribus nemo! Quo error impedit, qui mollitia itaque magni
    ducimus saepe incidunt laborum?
    Temporibus, rem.Fuga, dignissimos id.Nisi rem, nobis hic non obcaecati, tenetur animi maxime
    dignissimos placeat ea ratione voluptate ipsum suscipit ab eius? Omnis amet optio ad animi
    fugiat hic.
    Molestias sapiente dolorum nobis a nisi saepe! Tenetur perferendis, cupiditate vel perspiciatis
    officia culpa iusto, ipsum, nihil ipsam doloremque nemo dolorem minima? Deleniti vel provident
    mollitia.Voluptatem excepturi magni harum.`
        },
        {
            title: "Prueba de titulo 4",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aliquam delectus dolore amet
    ab ad explicabo accusamus natus voluptatem, error harum architecto facere, eius blanditiis
    ratione odit cumque asperiores enim.
    Aliquam eligendi, sapiente, corporis illo amet laborum veniam voluptate ullam doloremque maxime
    quis.Voluptatem eveniet quidem, numquam corporis veniam cumque nihil molestias optio iusto
    laudantium reprehenderit asperiores! Eos, error animi.
    Eum aut, blanditiis commodi maiores sapiente recusandae sit quia atque, id reiciendis repellat
    consequatur aliquam hic, magnam doloribus nemo! Quo error impedit, qui mollitia itaque magni
    ducimus saepe incidunt laborum?
    Temporibus, rem.Fuga, dignissimos id.Nisi rem, nobis hic non obcaecati, tenetur animi maxime
    dignissimos placeat ea ratione voluptate ipsum suscipit ab eius? Omnis amet optio ad animi
    fugiat hic.
    Molestias sapiente dolorum nobis a nisi saepe! Tenetur perferendis, cupiditate vel perspiciatis
    officia culpa iusto, ipsum, nihil ipsam doloremque nemo dolorem minima? Deleniti vel provident
    mollitia.Voluptatem excepturi magni harum.`
        },
        {
            title: "Prueba de titulo 5",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aliquam delectus dolore amet
    ab ad explicabo accusamus natus voluptatem, error harum architecto facere, eius blanditiis
    ratione odit cumque asperiores enim.
    Aliquam eligendi, sapiente, corporis illo amet laborum veniam voluptate ullam doloremque maxime
    quis.Voluptatem eveniet quidem, numquam corporis veniam cumque nihil molestias optio iusto
    laudantium reprehenderit asperiores! Eos, error animi.
    Eum aut, blanditiis commodi maiores sapiente recusandae sit quia atque, id reiciendis repellat
    consequatur aliquam hic, magnam doloribus nemo! Quo error impedit, qui mollitia itaque magni
    ducimus saepe incidunt laborum?
    Temporibus, rem.Fuga, dignissimos id.Nisi rem, nobis hic non obcaecati, tenetur animi maxime
    dignissimos placeat ea ratione voluptate ipsum suscipit ab eius? Omnis amet optio ad animi
    fugiat hic.
    Molestias sapiente dolorum nobis a nisi saepe! Tenetur perferendis, cupiditate vel perspiciatis
    officia culpa iusto, ipsum, nihil ipsam doloremque nemo dolorem minima? Deleniti vel provident
    mollitia.Voluptatem excepturi magni harum.`
        },
    ];

    // console.log(posts_array_json);

    posts_array_json.forEach((item, index) => {
        var post = `
    <article class="post">
        <h2><span class="bg-span">${item.title}</span></h2>
        <span class="date">${item.date}</span>
        <p>
             ${item.content}
        </p>
        <a href="#" class="btn-more">Leer más</a>
        <div class="clearfix"></div>
    </article>
    `;
        posts_id.append(post);
    });
});