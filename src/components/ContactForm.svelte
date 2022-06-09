<script context="module">
    let fullname = ''
    let email = ''
    let message = ''
    let messageSent = false

    async function sendContactForm(){
        const apiId = "AKfycbwj4hvut-et1gj3JZCZNcDgx6LBDnsnrCxddfrT3fmF5wG9VQUS2Zi6qkkzfhpf69_MKQ"
        const uri = `https://script.google.com/macros/s/${apiId}/exec`

        const encodedData = encodeURI(JSON.stringify({
            name: fullname,
            email: email,
            subject: `aeapplabs contact form ${email}`,
            message: message,
        }))
        const request = `${uri}?data=${encodedData}`
    
        fetch(request)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                fullname = ""
                email = ""
                message = ""

                messageSent = true
                console.log(messageSent)
            })
    }

    const formSubmit = () => {
        console.log("form submitted")
        sendContactForm(); 
        document.querySelector("#messageSent").classList.remove('is-hidden')
        document.querySelector("#formContainer").classList.add('is-hidden')
    }

</script>

<div class="contact-form">
    <div class="waves-layer">
        <svg width="1919" height="730.607" viewBox="0 0 1919 730.607">
            <path id="Path_114" data-name="Path 114" d="M0,119.382l45.843,11.459C91.686,142.6,183.371,165.52,274.63,180.3c91.472,14.475,182.3,20.506,273.777,21.411,91.259,1.206,182.945-3.016,274.2-16.586,91.472-13.57,182.3-36.489,273.777-68.756,91.259-32.267,182.945-73.279,274.2-97.1,91.472-23.522,182.3-29.553,273.777,5.126,91.259,34.68,182.945,110.07,228.787,147.765L1919,209.85V716.471H0Z" fill="#2de2c7"/>
            <path id="Path_115" data-name="Path 115" d="M0,0,45.843,34.662C91.686,69.645,183.371,138.969,274.63,168.5c91.472,29.527,182.3,18.615,273.777,11.875,91.259-7.061,182.945-10.27,274.2-17.331,91.472-6.74,182.3-17.652,273.777-38.834,91.259-21.5,182.945-53.6,274.2-53.6,91.472,0,182.3,32.095,273.777,50.388,91.259,17.973,182.945,22.466,228.787,24.392L1919,147.635v471.79H0Z" transform="translate(0 97.046)" fill="#28cbb3"/>
            <path id="Path_116" data-name="Path 116" d="M0,115.162,45.843,99.076C91.686,82.616,183.371,50.444,274.63,29.121,366.1,7.8,456.935-1.929,548.408.316c91.259,2.619,182.945,17.582,274.2,28.805,91.472,11.223,182.3,18.7,273.777,31.05,91.259,12.719,182.945,29.927,274.2,45.639,91.472,15.712,182.3,29.179,273.777,46.013,91.259,16.834,182.945,37.035,228.787,46.762l45.843,10.1V564.072H0Z" transform="translate(0 152.399)" fill="#24b49f"/>
            <path id="Path_117" data-name="Path 117" d="M0,88.688l45.843,2.826c45.843,2.826,137.528,8.479,228.787,3.674,91.472-4.522,182.3-19.784,273.777-22.61,91.259-2.826,182.945,6.783,274.2,4.239,91.472-2.261,182.3-16.392,273.777-35.611,91.259-19.5,182.945-43.807,274.2-40.981,91.472,2.826,182.3,32.785,273.777,39.568,91.259,6.5,182.945-10.457,228.787-18.936L1919,12.379V278.05H0Z" transform="translate(0 452.557)" fill="#1b8878"/>
          </svg>
          
    </div>

    <div id="contact" class="content-layer">
        <form class="form" id="contactForm" onsubmit="event.preventDefault();" method="GET">
            <div class="columns is-centered">
                <div class="column is-12 py-6 is-12-mobile">
                    <div class="card has-background-info is-shadowless is-rounded">
                        <div class="card-content">
                            <div class="content">
                                
                                <div id="formContainer">
                                        <p class="is-family-secondary title is-size-4 has-text-centered">Contact us by sending a message</p>
                                        <div class="columns">
                                            <div class="column is-half">
                                                <div class="field">
                                                    <label class="label has-text-white-ter" for="_fullname">Your Name</label>
                                                    <div class="control has-icons-left">
                                                        <input class="input is-medium has-text-dark" type="text" name="_fullname" placeholder="" bind:value={fullname}>
                                                        <span class="icon is-small is-left">
                                                            <i class="fas fa-user has-text-dark" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <label class="label has-text-white-ter" for="_replyto">Your Email</label>
                                                    <div class="control has-icons-left">
                                                        <input class="input is-medium has-text-dark" type="email" name="_replyto" placeholder="" bind:value={email}>
                                                        <span class="icon is-small is-left">
                                                            <i class="fas fa-envelope has-text-dark" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="column is-half">
                                                <div class="field">
                                                    <label class="label has-text-white-ter" for="message">Message</label>
                                                    <div class="control ">
                                                        <textarea name="message" class="textarea is-rounded has-text-dark" placeholder="" required="" bind:value={message}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="control has-text-centered">
                                                <button type="submit" class="button is-success is-medium my-2 btn btn-hover-effect" style="transform: translate(0px, 0px); opacity: 1;" on:click="{ formSubmit }">Send message</button>
                                            </div>
                                        </div>
                                    </div>

                                    <p id="messageSent" class="is-hidden my-2 has-text-centered">
                                        <span class="is-size-4">Message sent, Thank you for your time!</span>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

</div>