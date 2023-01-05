
    function search(searcher) {
        console.log(searcher);
        fetchSearchData(searcher);
    }

    function fetchSearchData(searcher) {

        var formData = new FormData();
        formData.append('searcher', searcher)

        fetch('json.php', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => viewSearchResult(res))
            .catch(e => console.error('Error:' + e))

    }


    function viewSearchResult(data) {

        if (data) {
            const dataViewer = document.querySelector('.box-container');

            dataViewer.innerHTML = "";

            for (let i = 0; i < data.length; i++) {

                const div = document.createElement('div');

                div.innerHTML = `
        <div class="content">
        <div>
        <a href=\"element.php?id= `+ data[i].id + `\" target="_blank"><h3>` + data[i].artists + `</h3></a></div>
        </div>
        `;

                dataViewer.appendChild(div);
            }
        } else {
            document.write("<div>Let's print an additional DIV here</div>");
        }
    }

    var submitHandler = function() {
        //do stuff
        return false;
      }
// }