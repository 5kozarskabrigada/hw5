// Задание 1
// Реализовать класс, описывающий окружность.В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get - свойство, возвращающее радиус окружности;
// ■ set - свойство, устанавливающее радиус окружности;
// ■ get - свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.


// class Circle
// {
//     constructor(radius)
//     {
//         this._radius = radius;
//     }

//     get radius()
//     {
//         return this._radius;
//     }

//     set radius(value)
//     {
//         this._radius = value;
//     }

//     get diameter()
//     {
//         return this._radius * 2;
//     }

//     area()
//     {
//         return Math.PI * this._radius ** 2;
//     }

//     circumference()
//     {
//         return Math.PI * this._radius * 2;
//     }


// }

// const circle = new Circle(4);

// console.log(circle._radius);
// console.log(circle.diameter);
// console.log(circle.area());
// console.log(circle.circumference());


// адание 2
// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write()


// class HtmlElement

// {
//     constructor(tagName, isSelfClosing = false, textContent)
//     {
//         this.tagName = tagName;
//         this.isSelfClosing = isSelfClosing;
//         this.textContent = textContent;
//         this.attributes = [];
//         this.styles = [];
//         this.children = []
//     }

//     setAttributes(name, value)
//     {
//         this.attributes.push(name, value);
//     }

//     setStyles(name, value)
//     {
//         this.styles.push(name, value);
//     }

//     addChildToBack(element)
//     {
//         this.children.push(element);
//     }

//     addChildtoFront(element)
//     {
//         this.children.unshift(element);
//     }

//     getHtml() {

//         let attrStr = this.attributes.map(attribute => `${attribute.name}="${attribute.value}"`);

//         let styleString = this.styles.map(style => `${style.name}: ${style.value};`);

//         if (styleString) 
//         {
//             attrStr += ` style="${styleString}"`;
//         }
//         const childrenHtml = this.children.map(child => child.getHtml());

//         return `${openingTag}${this.textContent}${childrenHtml}</${this.tagName}>`;
//     }

// }


// Задание 3
// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки.


class CssClass
{
    constructor(name) 
    {
        this.name = name; 
        this.styles = {}; 
    }

  
    setStyle(name, value) 
    {
        this.styles[name] = value;
    }

    removeStyle(name) 
    {
        delete this.styles[name];
    }

   
    getCss() 
    {
        
        const stylesStr = Object.entries(this.styles).map(([property, value]) => `${property}: ${value};`).join(' ');

        return `.${this.name} { ${stylesStr} }`;
    }
}

const newClass = new CssClass('class');
newClass.setStyle('color', 'maroon');
newClass.setStyle('font-size', '16px');
console.log(newClass.getCss()); 
newClass.removeStyle('font-size');
console.log(newClass.getCss()); 


// Задание 4
// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент, описанный с помощью класса
// HtmlElement;
// ■ метод getCode(), который возвращает строку с html кодом(сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных
// элементов).
// С помощью написанных классов реализовать следующий блок
//     (см.рис. 2) и добавить его на страницу с помощью document.write().

class HtmlElement 
{
    constructor(tagName) 
    {
        this.tagName = tagName;
        this.attributes = {};
        this.children =  [];
        this.text = '';
    }


    setAttribute(attribute, value) 
    {
        this.attributes[attribute] = value;
    }

  
    addChild(child) 
    {
        this.children.push(child);
    }

    
    setText(text)
    {
        this.text = text;
    }

    
    getHtml() {
        
        const attributesString = Object.entries(this.attributes).map(([key, value]) => `${key}="${value}"`).join(' ');
       
        const childrenHtml = this.children.map(child => child.getHtml()).join('');


        return `<${this.tagName} ${attributesString}>${this.text}${childrenHtml}</${this.tagName}>`;
    }
}

class HtmlBlock 
{
    constructor() 
    {
        this.styles = [];
        this.element = null;
    }

    
    addStyle(cssClass) 
    {
        this.styles.push(cssClass);
    }

    
    setElement(element) {
        this.element = element;
    }
}

