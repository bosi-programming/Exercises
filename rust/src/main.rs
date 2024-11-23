use crate::say_hello::say_hello::say_hello;

pub mod say_hello;

fn main() -> Result<(),()> {
    let _ = say_hello();
    Ok(())
}
