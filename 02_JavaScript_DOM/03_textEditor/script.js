
function openEditPanel(){

    const sentenceInput = document.createElement('input');
    sentenceInput.id = "sentenceInput";
    const addButton = document.createElement('button');
    addButton.id = 'addButton';
    addButton.textContent = "Add";
    addButton.addEventListener('click', () => {
        switch(addButton.textContent){
            case "Add":
                addNewSentence();
                break;
            case "Apply":
                editSentence();
                break;
            default:
                break;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        if (selectedElement != null){
            if (selectedElement.parentElement.children.length === 1){
                selectedElement.parentElement.remove();
            } else {
                selectedElement.remove();
            }
        }
        clearSelection();
    })

    const block = document.createElement('div');
    block.id = 'editExtraPanel';
    block.style.display = 'flex'
    block.style.gap = '8px';
    block.appendChild(sentenceInput);
    block.appendChild(addButton);
    block.appendChild(deleteButton);

    const editPanel = document.querySelector('#editPanel');
    const editButton = document.querySelector('#editButton');

    editButton.textContent = "Close edit mode";

    editPanel.insertBefore(block, editButton);

}

function closeEditPanel(){
    const extraEditPanel = document.querySelector('#editExtraPanel');
    extraEditPanel.remove();

    document.querySelector('#editButton').textContent = "Edit mode";

}

function setupItems(){
    const paragraphs = document.querySelectorAll('p');
    for (const p of paragraphs){
        p.style.border = '1px solid black';
        p.style.padding = '12px';
        p.addEventListener('click', (e) => {
            e.stopPropagation();
            setSelection(p);
        })

        const spans = p.children;
        for (const span of spans){
            span.addEventListener('click', (e) => {
                e.stopPropagation();
                setSelection(span);
            })
        }
    }
}

function clearItems(){
    const paragraphs = document.querySelectorAll('p');
    for (const p of paragraphs){
        p.removeAttribute("style");
        const spans = p.children;
        for (const span of spans){
            span.removeAttribute("style");
        }

        p.parentNode.replaceChild(p.cloneNode(true), p);
    }
}

function clearSelection(){
    console.log('clear')
    if (selectedElement != null) selectedElement.style.background = '';
    selectedElement = null;

    if (document.querySelector('#editButton').textContent === 'Close edit mode'){
        document.querySelector('#addButton').textContent = 'Add'
        document.querySelector('#sentenceInput').value = '';
        const prevButton = document.querySelector('#prevButton');
        if (prevButton) prevButton.remove();
    }
}

function setSelection(el){
    clearSelection();
    el.style.background = 'yellow';
    selectedElement = el;

    console.log(el)
    console.log(selectedElement)

    if (el.tagName === 'SPAN'){
        document.querySelector('#sentenceInput').value = el.textContent;
        document.querySelector('#addButton').textContent = 'Apply';

        const deleteButton = document.querySelector('#deleteButton');
        const prevButton = document.createElement('button');
        prevButton.id = 'prevButton';
        prevButton.textContent = 'Add as previous';
        prevButton.addEventListener('click', () => {
            const newSpan = document.createElement('span');
            newSpan.addEventListener('click', (e) => {
                e.stopPropagation();
                setSelection(newSpan);
            })
            newSpan.textContent = document.querySelector('#sentenceInput').value + ' ';
            el.parentElement.insertBefore(newSpan, el);
            clearSelection();
        })
        deleteButton.parentElement.insertBefore(prevButton, deleteButton);
    }

}


function addNewSentence(){

    const textSpace = document.querySelector('#textSpace')
    const sentence = document.querySelector('#sentenceInput').value;

    const p = document.createElement('p');
    p.style.border = '1px solid black';
    p.style.padding = '12px';
    p.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelection(p);
    })

    const span = document.createElement('span');
    span.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelection(span);
    })

    span.textContent = sentence;
    p.appendChild(span);

    textSpace.appendChild(p);

}

function editSentence(){
    selectedElement.textContent = document.querySelector('#sentenceInput').value;
    clearSelection();
}


let selectedElement = null;

document.querySelector("#editButton").addEventListener('click', () => {

    if (editButton.textContent === 'Edit mode'){

        openEditPanel();
        
        setupItems();

    } else {
        
        closeEditPanel();
        
        clearItems();
    }

});

document.querySelector('#space').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        clearSelection();
    }
});

