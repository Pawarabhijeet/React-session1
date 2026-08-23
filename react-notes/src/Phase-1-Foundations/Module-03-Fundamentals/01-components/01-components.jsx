//Component -> one default export
//createElement

// //NAMED EXPORT #1
// export function ButtonComp() {
//   return <button>Click</button>;
// }

// //NAMED EXPORT #2
// export function InputComp() {
//   return <input type="text" />;
// }

// //DEFAULT EXPORT
// function CardComp() {
//   return (
//     <div>
//       <p>Card Component</p>
//       <InputComp />
//       <ButtonComp />
//     </div>
//   );
// }
// export default CardComp;


//Named export #1

export function ButtonComp(){
    return <button>Click</button>
}

//Named export #2
export function InputComp(){
    return <input type = "text"/>
}

//Default Export

function cardComp(){
    return (
        <div>
            <p>card component</p>
            <InputComp/>
            <ButtonComp/>
        </div>
    )
}
export default cardComp;

