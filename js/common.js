const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');




function showDonationHistory(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');



    document.getElementById(id).classList.remove('hidden');
}




function modalShow(id){
    document.getElementById(id).showModal();
    return;
}


