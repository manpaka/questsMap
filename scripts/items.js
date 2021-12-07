var recap = document.getElementById('recapParagraph').innerHTML;
var num = document.getElementsByClassName('MagicItem');

for (let i = 0; i < num.length; i++) {
    var item = num[i];
    findItem(item);
}

function findItem(item){
    var source = "https://www.dnd5eapi.co/api/magic-items/" + item.innerHTML;

    fetch(source)
    .then(function(response) {
        return response.json();
    })
    .then(function(obj) {
        magicItem(item, obj.name, obj.desc[0], obj.desc[1]);
    })
    .catch(function(error) {
        console.error('Something Went Wrong');
        console.error(error);
    });
}

// desc [Subheading, Description]
function magicItem(item, name, sub, desc) {
    // console.log(item, '\n', name, '\n', sub, '\n', desc);

    

    ReactDOM.render(<HighlightItem target={name} name={name} sub={sub} desc={desc} />, item);
}

function HighlightItem(props){
    return (
        <>
            <a type="button" data-toggle="modal" data-target="#itemModal" data-name={ props.target } data-sub={props.sub} data-desc={props.desc}>
                { props.name }
            </a>
        </>
    );
}

$('#itemModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var title = button.data('name');
    var sub = button.data('sub');
    var desc = button.data('desc');

    var modal = $(this)
    modal.find('.item-title').text(title)
    modal.find('.item-subtitle').text(sub)
    modal.find('.item-body').text(desc)
});