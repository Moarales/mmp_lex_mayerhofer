import style from './styles/style.scss';

        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.'));
        console.log(filename);
        var activeItem=document.getElementById(filename).classList.add('active');
        document.getElementByTagName("li").addEventListener('mouseover', removeActive);
        consloe.log(activeItem);
        
        
        function removeActive(){
            document.getElementById(filename).classList.remove('active');
        }