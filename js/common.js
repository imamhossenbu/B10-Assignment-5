const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');




function showDonationHistory(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');



    document.getElementById(id).classList.remove('hidden');
}



function activeBtn(active,inactive){
    // donationBtn.classList.add('activeBtn');
    // historyBtn.classList.add('activeBtn');

    // document.getElementById(active,inactive).classList.remove('activeBtn');


}


function modalShow(id){
    document.getElementById(id).showModal();
    return;
}