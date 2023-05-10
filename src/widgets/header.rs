use yew::{function_component, html, Html};

#[function_component]
pub fn Header() -> Html {
    html! {
            <header class="flex justify-between items-center h-20">
                <img src="https://yew.rs/img/logo.png" alt="logo" class="w-8 h-8" />
                <nav class="flex items-center">
                    <a href="#" >{"登陆"}</a>
                    <a href="#" class="ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center">{"注册"}
    <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 fill-neutral-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
                </nav>
            </header>
        }
}
