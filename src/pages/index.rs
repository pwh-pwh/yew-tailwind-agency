use super::super::widgets::hero::Hero;
use crate::widgets::clients::Clients;
use crate::widgets::contact::Contact;
use crate::widgets::footer::Footer;
use crate::widgets::header::Header;
use crate::widgets::how_it_works::HowIsWorks;
use crate::widgets::solutions::Solutions;
use yew::{function_component, html, Html};

#[function_component]
pub fn Index() -> Html {
    html! {
        <div class="container mx-auto p-4">
            <Header />
            <main class="mt-20">
              <Hero />
                <selection class="md:p-20">
                    <Solutions />
                </selection>
                <selection class="mt-20">
                    <HowIsWorks />
                </selection>
                <selection class="mt-20 md:w-3/5 mx-auto">
                    <Clients />
                </selection>
                <selection class="mt-20">
                    <Contact />
                </selection>
            </main>
            <Footer />
        </div>
    }
}
