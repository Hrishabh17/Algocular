let generate_button = document.getElementById("generate_array")
let container = document.querySelector(".data_container")
let left_para_head = document.getElementById("left_para_head")
let right_para_head = document.getElementById("right_para_head")
let sort_button = document.getElementById("sort")
let slider = document.getElementById("myRange")
let algo_mutable = document.getElementById("right_side_para_mutable")
let algo_main = document.getElementById("right_side_para_algo")
let slider_value = 200

function generate_array() {
    let m = document.getElementById("left_side_para")
    m.innerHTML = ""
    algo_main.innerHTML = ""
    algo_mutable.innerHTML = ""
    para_hide()
    for (let i = 0; i < 15; i += 1) {
        const array = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div")
        bar.classList.add("bar")
        bar.style.height = `${array*3}px`
        bar.style.transform = `translateX(${i * 50}px)`
        const bar_label = document.createElement("bar_label")
        bar_label.classList.add("bar_id")
        bar_label.innerHTML = array
        bar.appendChild(bar_label)
        container.appendChild(bar)
    }
}

function take_input_array() {
    container.innerHTML = ""
    generate_array()
}

let input = document.getElementById("user_array")

function generate_new_array() {
    input.addEventListener('keyup', function(e) {
        let m = document.getElementById("left_side_para")
        m.innerHTML = ""
        para_hide()
        let str = ','
        let array = new Array(15)
        str += input.value
        arr = (str.split(","))

        let x = arr.length
        if (arr.length > 17) {
            x = 16;
        }
        for (let i = 1; i < x - 1; i += 1) {
            arr[i] = parseInt(arr[i])
            if ((!isNaN(arr[i])) && arr[i] < 101 && arr[i] > 0) {
                array.push(arr[i])
            }
        }

        container.innerHTML = ""
        let j = 0
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] != undefined) {
                const array_in = array[i];
                const bar = document.createElement("div")
                bar.classList.add("bar")
                bar.style.height = `${array_in*3}px`
                bar.style.transform = `translateX(${j * 50}px)`
                const bar_label = document.createElement("bar_label")
                bar_label.classList.add("bar_id")
                bar_label.innerHTML = array_in
                bar.appendChild(bar_label)
                container.appendChild(bar)
                j += 1
            }
        }
    })
}


async function selection_sort() {
    disable()
    para_view()
    let x = document.getElementById("left_side_para")
    x.innerHTML = ""
    let bars = document.querySelectorAll(".bar")

    let left_side_bar = document.getElementById("left_side_bar")

    let lists = ""

    for (let k = 0; k < bars.length; k += 1) {
        lists += bars[k].childNodes[0].innerHTML + " "
    }

    let pass = `<li id ="passes_list">${lists}</li>`

    let left_side_para = document.getElementById("left_side_para")
    left_side_para.innerHTML += pass


    let min = 0
    for (let i = 0; i < bars.length; i += 1) {
        min = i
        bars[min].style.backgroundColor = "rgb(220,20,60)"
        algo_main.innerHTML = `<li class="class1">for i=0 to array.length</li><li id="list7"> {</li>
                             <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
                             <li id="list3">if array[min]>array[j]</li><li id="list5"> {</li>
                             <li id ="list9">min=j</li>
                             <li id ="list5">}</li>
                             <li id="list6">}</li>
                             <li id ="list2">if min != i</li>
                             <li id ="list6">{</li>
                             <li id="list3">swap(array[min],array[i])</li>
                             <li id ="list6">}</li>
                             <li id="list7">}</li>`

        algo_mutable.innerHTML = `<li>i == ${i}</li>`

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, Math.abs(500 - slider_value))
        );


        for (let j = i + 1; j < bars.length; j += 1) {
            algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
                             <li id="list2" class = "class1">for j=i+1 to array.length</li><li id="list6"> {</li>
                             <li id="list3">if array[min]>array[j]</li><li id="list5"> {</li>
                             <li id ="list9">min=j</li>
                             <li id ="list5">}</li>
                             <li id="list6">}</li>
                             <li id ="list2">if min != i</li>
                             <li id ="list6">{</li>
                             <li id="list3">swap(array[min],array[i])</li>
                             <li id ="list6">}</li>
                             <li id="list7">}</li>`

            algo_mutable.innerHTML = `<li>j == ${j}</li>`

            bars[j].style.backgroundColor = "blue"

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, Math.abs(500 - slider_value))
            );


            let val1 = Number(bars[j].childNodes[0].innerHTML)
            let val2 = Number(bars[min].childNodes[0].innerHTML)


            algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
                             <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
                             <li id="list3" class = "class1">if array[min]>array[j]</li><li id="list5"> {</li>
                             <li id ="list9">min=j</li>
                             <li id ="list5">}</li>
                             <li id="list6">}</li>
                             <li id ="list2">if min != i</li>
                             <li id ="list6">{</li>
                             <li id="list3">swap(array[min],array[i])</li>
                             <li id ="list6">}</li>
                             <li id="list7">}</li>`



            algo_mutable.innerHTML = `<li>checking if ${val1} < ${val2}</li>`


            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 500 - slider_value)
            );

            algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
            <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
            <li id="list3" class = "class1">if array[min]>array[j]</li><li id="list5"> {</li>
            <li id ="list9">min=j</li>
            <li id ="list5">}</li>
            <li id="list6">}</li>
            <li id ="list2">if min != i</li>
            <li id ="list6">{</li>
            <li id="list3">swap(array[min],array[i])</li>
            <li id ="list6">}</li>
            <li id="list7">}</li>`

            if (val1 < val2) {
                bars[min].style.backgroundColor = "rgb(212,84,24)"
                bars[j].style.backgroundColor = "rgb(212,84,24)"
                min = j
                algo_mutable.innerHTML = `<li>min = ${j}</li>`
                bars[i].style.backgroundColor = "rgb(212,84,24)"

                bars[min].style.backgroundColor = "rgb(220,20,60)"



                algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
                <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
                <li id="list3">if array[min]>array[j]</li><li id="list5"> {</li>
                <li id ="list9"  class = "class1">min=j</li>
                <li id ="list5">}</li>
                <li id="list6">}</li>
                <li id ="list2">if min != i</li>
                <li id ="list6">{</li>
                <li id="list3">swap(array[min],array[i])</li>
                <li id ="list6">}</li>
                <li id="list7">}</li>`

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 500 - slider_value)
                );


                algo_mutable.innerHTML = `<li>${val1} < ${val2} :: True</li>`

            }
            bars[j].style.backgroundColor = "rgb(212,84,24)"
            bars[min].style.backgroundColor = "rgb(220,20,60)"
        }
        bars[min].style.backgroundColor = "rgb(212,84,24))"

        algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
        <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
        <li id="list3">if array[min]>array[j]</li><li id="list5"> {</li>
        <li id ="list9">min=j</li>
        <li id ="list5">}</li>
        <li id="list6">}</li>
        <li id ="list2" class = "class1">if min != i</li>
        <li id ="list6">{</li>
        <li id="list3">swap(array[min],array[i])</li>
        <li id ="list6">}</li>
        <li id="list7">}</li>`

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 500 - slider_value)
        );

        if (min != i) {

            algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
            <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
            <li id="list3">if array[min]>array[j]</li><li id="list5"> {</li>
            <li id ="list9">min=j</li>
            <li id ="list5">}</li>
            <li id="list6">}</li>
            <li id ="list2">if min != i</li>
            <li id ="list6">{</li>
            <li id="list3" class = "class1">swap(array[min],array[i])</li>
            <li id ="list6">}</li>
            <li id="list7">}</li>`


            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 500 - slider_value)
            );

            algo_mutable.innerHTML = `<li>swapping ${bars[i].childNodes[0].innerHTML} & ${bars[min].childNodes[0].innerHTML}</li>`
            bars[min].style.backgroundColor = "rgb(212,84,24)"
            
            await new Promise((resolve) => {
            
            var temp = bars[i].style.transform;
            bars[i].style.transform = bars[min].style.transform;
            bars[min].style.transform = temp;
        
                window.requestAnimationFrame(function() {
                    setTimeout(() => {
                        container.insertBefore(bars[min],bars[i])
                        container.insertBefore(bars[i],bars[min+1])

                        resolve();
                    }, 500 - slider_value);
                });
            });

            bars = document.querySelectorAll(".bar")
        }


        algo_main.innerHTML = `<li>for i=0 to array.length</li><li id="list7"> {</li>
            <li id="list2">for j=i+1 to array.length</li><li id="list6"> {</li>
            <li id="list3">if array[min]>array[j]</li><li id="list5"> {</li>
            <li id ="list9">min=j</li>
            <li id ="list5">}</li>
            <li id="list6">}</li>
            <li id ="list2">if min != i</li>
            <li id ="list6">{</li>
            <li id="list3">swap(array[min],array[i])</li>
            <li id ="list6">}</li>
           <li id="list7">}</li>`


        bars[min].style.backgroundColor = "rgb(212,84,24)"
        bars[i].style.backgroundColor = "green"

        let lists = ""
        for (let k = 0; k < bars.length; k += 1) {
            lists += bars[k].childNodes[0].innerHTML + " "
        }
        pass = `<li id ="passes_list">${lists}</li>`
        left_side_para.innerHTML += pass


    }
    algo_mutable.innerHTML = `<li>Sorted</li>`
    enable()
}

function para_hide() {
    left_para_head.style.display = "none"
    right_para_head.style.display = "none"
    algo_main.style.display = "none"
    algo_mutable.style.display = "none"
}

function para_view() {
    left_para_head.style.display = "block"
    right_para_head.style.display = "block"
    algo_main.style.display = "block"
    algo_mutable.style.display = "block"
}

function disable() {
    sort_button.disabled = true
    input.disabled = true
    input.style.backgroundColor = "#9c7dc0"
    generate_button.disabled = true
    generate_button.style.backgroundColor = "#9c7dc0"
    sort_button.style.backgroundColor = "#9c7de0"
}

function enable() {
    sort_button.disabled = false
    input.disabled = false
    input.style.backgroundColor = "#6f459e"
    generate_button.disabled = false
    generate_button.style.backgroundColor = "#6f459e"
    sort_button.style.backgroundColor = "#6f459e"
}

slider.addEventListener("change", slider_fn)

function slider_fn() {
    slider_value = this.value
}


generate_array()
generate_new_array()