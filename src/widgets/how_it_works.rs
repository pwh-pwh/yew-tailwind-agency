use super::section_heading::SectionHeading;
use yew::{function_component, html, Html};

#[function_component]
pub fn HowIsWorks() -> Html {
    html! {
                <div>
                    <SectionHeading title="工作流程" sub_title="何工作如何工作如何工作如何工作如何工作如"/>
                <div class="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        (1..=6).map(|v|{
                        html! {
                            <div key={v} class="grid justify-items-center gap-y-2">
        <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="28" cy="28" r="28" fill="#0070F4" />
                      <path d="M30.2 31L32 33H39" stroke="#99C5FA" stroke-width="2" />
                      <path d="M18 23H23L24.8 25" stroke="#99C5FA" stroke-width="2" />
                      <path d="M18 33H23L32 23H39" stroke="white" stroke-width="2" />
                      <path
                        d="M36 30L39 33L36 36"
                        stroke="#99C5FA"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                      <path
                        d="M36 26L39 23L36 20"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                    </svg>

    <p class="text-xl font-bold">{"初步沟通"}</p>
                <p class="text-gray-500">
                  {"初步沟通初步沟通初步沟通初步沟通初步沟通初步沟通"}
                </p>
                            </div>
                        }
                    }).collect::<Html>()
                    }
                </div>
                </div>
            }
}
