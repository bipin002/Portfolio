$("#LinkedInID").on('click',function(e){
    e.preventDefault();
    SocialMediaRedirect("LinkIndClik");
});
$("#githubID").on('click',function(e){
    e.preventDefault();
    SocialMediaRedirect("GithubClick");
});
$("#gmailID").on('click',function(e){
    e.preventDefault();
    SocialMediaRedirect("GmailClick");
});

$("#WhatsappID").on('click',function(e){
    e.preventDefault();
    SocialMediaRedirect("WhatsApp");
});

function SocialMediaRedirect(SocialMedia){
    if(SocialMedia=='LinkIndClik'){
window.location='https://www.linkedin.com/in/bipin-mistry-18a0b7171/';
    }
    if(SocialMedia=='GithubClick'){
window.location='https://github.com/bipin002';
    }
    if(SocialMedia=='GmailClick'){
window.location='mailto:mistrybipin002@gmail.com';
    }
    if(SocialMedia=='WhatsApp'){
        window.location='https://wa.me/9819400327';
            }

}