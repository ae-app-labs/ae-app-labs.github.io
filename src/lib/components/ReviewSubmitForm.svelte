<script context="module">
    let fullname = ''
    let email = ''
    let message = ''
    let reviewLink = ''
    let contactable = false
    let messageSent = false
    let formError = false

    async function sendReviewForm(){
        const apiId = "AKfycbwj4hvut-et1gj3JZCZNcDgx6LBDnsnrCxddfrT3fmF5wG9VQUS2Zi6qkkzfhpf69_MKQ"
        const uri = `https://script.google.com/macros/s/${apiId}/exec`

        const encodedData = encodeURI(JSON.stringify({
            name: fullname,
            email: email,
            subject: `aeapplabs review submission from ${fullname} (${email}) `,
            message: `${message} <br/> Link: ${reviewLink} <br/>Contactable: ${contactable}`,
        }))

        // Do some validation
        if(reviewLink.length && reviewLink.length < 12){
            formError = true
            return false;
        }

        const request = `${uri}?data=${encodedData}`
    
        fetch(request)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                fullname = ""
                email = ""
                message = ""
                reviewLink = ""

                messageSent = true
                formError = false
                console.log(messageSent)
            })
    }

    const formSubmit = async () => {
        console.log("form submitted")
        await sendReviewForm()

        if(messageSent){   
            document.querySelector('#messageError').classList.add('is-hidden')
            document.querySelector("#messageSent").classList.remove('is-hidden')
            //document.querySelector("#formContainer").classList.add('is-hidden')
        }
        if(formError){
            document.querySelector('#messageError').classList.remove('is-hidden')
        }
    }

</script>

<div class="review-form" id="review-form">
    <div id="review" class="content-layer">
        <form class="form" id="reviewForm" onsubmit="event.preventDefault();" method="GET">
            <div class="columns is-centered">
                <div class="column is-12 py-6 is-12-mobile">
                    <div class="card has-background-info is-shadowless is-rounded">
                        <div class="card-content">
                            <div class="content">
                                
                                <div id="reviewFormContainer">
                                    <p class="is-family-secondary is-size-2 mb-2">Submit Design for Review</p>
                                    <p class="is-size-5">Submit a link for a design file or a webpage if you want a free UI/UX review. <br/> We will take a look and let you know if we review it.</p>
                                    <div class="columns mt-2">
                                        <div class="column is-half">
                                            <div class="field">
                                                <label class="label has-text-white-ter is-size-5" for="_fullname">Your Name</label>
                                                <div class="control has-icons-left">
                                                    <input class="input is-medium has-text-dark" type="text" name="_fullname" placeholder="" bind:value={fullname}>
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-user has-text-dark" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label has-text-white-ter is-size-5" for="_replyto">Your Email</label>
                                                <div class="control has-icons-left">
                                                    <input class="input is-medium has-text-dark" type="email" name="_replyto" placeholder="" bind:value={email}>
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-envelope has-text-dark" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field is-size-4 mt-2">
                                                <label class="checkbox">
                                                    <input type="checkbox" class="is-medium" name="_contactable" bind:value={contactable}>
                                                    I want to be contacted if this link is reviewed. 
                                                  </label>
                                            </div>
                                        </div>

                                        <div class="column is-half">
                                            <div class="field">
                                                <label class="label has-text-white-ter is-size-5" for="_reviewLink">Link to design file or web page</label>
                                                <div class="control has-icons-left">
                                                    <input class="input is-medium has-text-dark" type="url" name="_reviewLink" placeholder="" bind:value={reviewLink} required>
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-link has-text-dark" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label has-text-white-ter is-size-5" for="message">Any Notes</label>
                                                <div class="control ">
                                                    <textarea name="message" class="textarea is-rounded has-text-dark" placeholder="" bind:value={message}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    Refer to the website's <a class="is-link" href="https://ae-app-labs.github.io/privacy-policy" target="_blank">Privacy Policy</a>
                                    <div class="field">
                                        <div class="control has-text-centered">
                                            <button type="submit" class="button is-link is-medium my-2 btn btn-hover-effect" style="transform: translate(0px, 0px); opacity: 1;" on:click="{ formSubmit }">Send for Review</button>
                                        </div>
                                    </div>
                                </div>

                                <p id="messageSent" class="is-hidden my-2 has-text-centered">
                                    <span class="is-size-4">Review sent, Thank you for your time!</span>
                                </p>
                                <p id="messageError" class="is-hidden my-2 has-text-centered has-text-warning-dark">
                                    <span class="is-size-4">The link for the review is mandatory.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

</div>