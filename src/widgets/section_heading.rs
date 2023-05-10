use yew::{function_component, html, AttrValue, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct SectionHeadingProps {
    pub title: AttrValue,
    pub sub_title: AttrValue,
}

#[function_component]
pub fn SectionHeading(SectionHeadingProps { title, sub_title }: &SectionHeadingProps) -> Html {
    html! {
        <div>
            <h2 class="text-[2.635em] font-black text-center">{title}</h2>
            <p class="text-xl mt-4 text-center text-gray-500">{sub_title}</p>
        </div>
    }
}
