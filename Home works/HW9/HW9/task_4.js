  /*
    Завдання:
     Копіювати текст із файлу RegExp.txt на сайт https://regexr.com/
     Написати регулярний вираз, який знайде:
       1. Усі слова.
       2. Усі збіги букв від a до e,
       3. Року, наприклад 2004
       4. Слова загорнуті в [квадратні Кавички]
       5. Усі формати файлів .jpg / .png / .gif
       6. Усі email com.ua
       7. Всі слова написані з великої літери
       8. Знайти телефон написаний за патерном +00 (000) 000-00-00,
          де замість 0 може бути будь-яке число
  */

    var text = "https://regexr.com/6sgg1";

    // 1

    var pattern = /\w+/g; // усі слова
    var result = string.match(pattern);
    console.log( result );

    // 2
    var pattern = /[a-e]/g; // Усі збіги букв від a до e,
    var result = string.match(pattern);
    console.log( result );

    // 3
    var pattern = /2007/g; //  Року, наприклад 2007 or /\d{4}/g;
    var result = string.match(pattern);
    console.log( result );

    // 4
    var pattern = /\[\w+\]/g; // Слова загорнуті в [квадратні Кавички]
    var result = string.match(pattern);
    console.log( result );

    // 5
    // ([^\s]+(?=\.(jpg|gif|png))\.\2) такий варіант найшла, але тут умова "але"
    var pattern = /\.gif/g;   // Усі формати файлів .jpg / .png / .gif
    var result = string.match(pattern);
    console.log( result );

    // 6

    var pattern =/\bemail\bcom.ua/g; //  Року, наприклад 2007
    var result = string.match(pattern);
    console.log( result );

    //7. 
    var pattern =/[A-Z][a-z]+/g; // Всі слова написані з великої літери
    var result = string.match(pattern);
    console.log(result);

    // 8
    //Знайти телефон написаний за патерном +00 (000) 000-00-00, де замість 0 може бути будь-яке число
    var pattern =/\+? ?3?[ -]?8?[ -]?\(?(\d[ -]?){3}\)?[ -]?(\d[ -]?){7}/g; 
    var result = string.match(pattern);
    console.log(result);


    
