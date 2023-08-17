</style>
</head>
<body>
    <h1>Calculator Program in Javascript</h1>
    <div class="formstyle">
        <form name="form1">
        <input class="textview" name="textview">
            </form>
            <center>
                <table>
                <tr>
                <td> <input class="btn" type ="button" value= "C" onclick ="form1.textview.value=''"> </td>
                <td> <input class="btn"type ="button" value="B" onclick="backspace()"> </td>
                <td> < input class="btn" type ="button" value="/" onclick="insert('/')" > </td>
                <td> <input class ="btn" type= "button" value="x" onclick="insert('*')"> </td>
                </tr>

                <tr>
                    <td> <input class="btn" type="button" value="7" onclick="insert(7)"> </td>
                    <td> <input class ="btn" type ="button" value="8" onclick ="insert(8)"> </td>
                    <td> <input class="btn"   type = "button" value="9" onclick= "insert(9)"> </td>
                    <td> <input class= "btn"  type = "button" value ="-" onclick = "insert('-')> </td>
                   </tr>

                </table>
            </center>
        </input>
        </form>
    </div>
    
</body>