// get modal element
    var simpleModal = document.getElementById('simpleModal');
    //get open modal button
    var modalBtn = document.getElementById('modalBtn');
    //get close btn
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    //listen for click
    modalBtn.addEventListener('click', openModal);
    //listen for close click
    closeBtn.addEventListener('click', closeModal);
    //listen for outside click
   window.addEventListener('click', clickOutside);
    //function to open modal
    function openModal(){
        simpleModal.style.display = 'block';

    }

    //function to open modal
        function closeModal(){
        
            simpleModal.style.display = 'none';
        }

    //function to close modal if outside click
    function clickOutside(e){
        if(e.target == simpleModal){
            simpleModal.style.display = 'none';
        }

    }