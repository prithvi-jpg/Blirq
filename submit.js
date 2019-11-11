document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#submit').disabled = true;

    document.querySelector('#blirq').onkeyup = () => {
        if (document.querySelector('#blirq').value.length > 0)
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    document.querySelector('#new-blirq').onsubmit = () => {

        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#blirq').value;

        // Add new item to blirq list
        document.querySelector('#blirqs').append(li);

        // Clear input field and disable button again
        document.querySelector('#blirq').value = '';
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    };

});

