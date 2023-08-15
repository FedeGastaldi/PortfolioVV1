document.addEventListener("DOMContentLoaded" , (event)=>{
    
    setTimeout( () => {
        document.querySelector("#load-iframe-map").innerHTML = `

        <iframe   class="contact__iframe"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.392236276436!2d-61.94606981907217!3d-29.88179671756027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9436798db2194941%3A0x1f5035f48ca6fb29!2sCeres!5e0!3m2!1ses-419!2sar!4v1691813439754!5m2!1ses-419!2sar"  ></iframe>


    `;
    }, 550);
    
});

