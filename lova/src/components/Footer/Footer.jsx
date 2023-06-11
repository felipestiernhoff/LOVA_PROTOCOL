export function createFooter(footer) {

return footer;
}


export const Footer = () => {
    return (
        <>

            <nav>
                 <ul className="footerUl">
                    <li className="footerLi" onclick="location.href = 'https://www.discord.com';"> <i  class="fa-brands fa-discord fa-2xl"></i>aa</li>
                    <li className="footerLi" onclick="location.href = 'https://www.twitter.com';"> <i class="fa-brands fa-twitter fa-2xl"></i></li>
                    <li className="footerLi" onclick="location.href = 'https://github.com/jacksmithinsulander/smartPromise';"> <i class="fa-brands fa-github fa-2xl"></i></li>
                </ul>
            </nav>  

        
        </>
    )
}
