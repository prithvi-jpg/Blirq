document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#Reply').disabled = true;

    document.querySelector('#blirq').onkeyup = () => {
        if (document.querySelector('#blirq').value.length > 0)
            document.querySelector('#Reply').disabled = false;
        else
            document.querySelector('#Reply').disabled = true;
    };

    document.querySelector('#new-reply').onReply = () => {

        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#blirqreply').value;

        // Add new item to blirq list
        document.querySelector('#replies').append(li);

        // Clear input field and disable button again
        document.querySelector('#blirqreply').value = '';
        document.querySelector('#Reply').disabled = true;

        // Stop form from Replyting
        return false;
    };

});