use std::io::{self, stdin, BufRead};

pub fn say_hello() -> io::Result<()> {
    println!("What is your name? ");
    let input = stdin();
    let name = &mut String::new();
    input.lock().read_line(name)?;
    let name = name.replace('\n', "");
    println!("Hello, {}, nice to meet you!", name);
    Ok(())
}
