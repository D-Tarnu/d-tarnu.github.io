const paperList = [
  {
    title: "4. Limiting behavior of Rudin-Shapiro sequence autocorrelations (with Stephen Choi). In preparation.\u00A0",
    journal_title: "",
    journal_link: "/asd/",
    year: "",
    pdf_link: "",
  },
  {
    title: "3. On maximal autocorrelations of Rudin-Shapiro sequences.\u00A0",
    journal_title: "Journal of Approximation Theory",
    journal_link: "https://www.sciencedirect.com/science/article/pii/S0021904523000047",
    year: ", accepted.\u00A0",
    pdf_link: "https://arxiv.org/pdf/2202.05897v2.pdf",
  },
  {
    title: "2. The order of the fundamental solution of X\u00B2 - DY\u00B2 = 1 in Z[sqrt(D)]/&lt;D&gt; (with Stephen Choi).\u00A0",
    journal_title: "Integers",
    journal_link: "http://math.colgate.edu/~integers/w84/w84.pdf",
    year: ", 2022.\u00A0",
    pdf_link: "http://math.colgate.edu/~integers/w84/w84.pdf",
  },
  {
    title: "1. Gap principle of divisibility sequences of polynomials (with Stephen Choi and Peter Cho-Ho Lam).\u00A0",
    journal_title: "Journal of Number Theory",
    journal_link: "https://www.sciencedirect.com/science/article/abs/pii/S0022314X20303346",
    year: ", 2021.\u00A0",
    pdf_link: "http://www.sfu.ca/~schoia/paper/gap2.pdf",
  }
];

function paperGen(title, journal_title, journal_link, year, pdf_link) {
  const paper = document.createElement("h3");
  const jlink = document.createElement("a");
  const plink = document.createElement("a");

  jlink.textContent = journal_title;
  jlink.href = journal_link;

  paper.className = "linked";
  paper.innerHTML += title;
  paper.append(jlink);
  paper.innerHTML += year;

  if (pdf_link.length > 0) {
    const plink = document.createElement("a");
    plink.textContent = "(pdf)";
    plink.href = pdf_link;
    paper.append(plink);
  }

  return paper
}

function replaceMain(tab) {
  const el = document.getElementById("main");
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
  if (tab == 'home') { //first flex-direction row needs to be changed
    el.innerHTML = `<div style="display: flex; flex-direction: row; margin-top: 2.75rem">
        <img src="/imgs/face.png" class="id">
        <div style="display: grid; margin-bottom: rem; margin-top: rem; align-items: center">
          <h3> Occupation: Mathematician </h3>
          <h3 class="linked"> Affiliation:&nbsp; <a href="http://www.math.sfu.ca/">SFU Math</a> </h3>
          <h3> Contact: [first]_[last]@sfu.ca </h3>
        </div>
      </div>`
  }
  else if (tab == 'research') {
    el.innerHTML = `<h3>
      I am interested in number theory and combinatorics, particularly using analytic methods.
      <br>The following is a list of papers I've worked on.
      <br><br>
    </h3>`
    
    for (let i = 0; i < paperList.length; i++) {
      const { title, journal_title, journal_link, year, pdf_link } =  paperList[i];
      el.append(paperGen(title, journal_title, journal_link, year, pdf_link));
    }
  }
};
