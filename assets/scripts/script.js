
const workingHistoryTable =
 `
<h2><br>Werdegang</h2>
<table>
    <colgroup span="2"> </colgroup>
    <tr>
        <td class="table_cells">01/2024 </td>
        <td class="table_cells">Ausbildung: Fachinformatiker AE</td>
    </tr>
    <tr>
        <td class="table_cells">02/2019 - 01/2024 </td>
        <td class="table_cells">Business Solution EAM Team: Nuklear CH</td>
    </tr>
    <tr>
        <td class="table_cells">01/2020 - 01/2022</td>
        <td class="table_cells">Mustertätigkeit_1</td>
    </tr>
    <tr>
        <td class="table_cells">01/2020 - 01/2022</td>
        <td class="table_cells">Mustertätigkeit_2</td>
    </tr> 
    </table>
    <button id="add" class=button-89 type="button" onclick="showCompleteWorkingHistoryTable()">Weitere Tätigkeiten anzeigen</button>   
    <br>          
`

const additivWorkingHistoryTable =
 `
<br>
<table>
    <colgroup span="2"> </colgroup>
    <tr>
        <td class="table_cells">01/2020 - 01/2022</td>
        <td class="table_cells">Mustertätigkeit_3</td>
    </tr>
    <tr>
        <td class="table_cells">01/2020 - 01/2022</td>
        <td class="table_cells">Mustertätigkeit_4</td>
    </tr>              
</table>
`

function add(){
    let element = document.getElementById("workingHistoryTable");
    element.innerHTML = workingHistoryTable;
}

function showCompleteWorkingHistoryTable(){
    let element = document.getElementById("workingHistoryTable");
    element.innerHTML = workingHistoryTable;
    element.innerHTML += additivWorkingHistoryTable;
}

