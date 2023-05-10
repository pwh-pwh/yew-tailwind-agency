mod app;
pub mod pages;
mod widgets;

use app::App;

fn main() {
    yew::Renderer::<App>::new().render();
}
