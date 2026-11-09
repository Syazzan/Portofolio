
/* ===== EDIT YOUR CONTENT HERE (single-file build; split into /assets, /css, /js if you self-host) ===== */
const CFG = {
    photo: "assets/images/rmv-bg-gweh-.png", about: "assets/images/gweh-hitam-putih.png", cv: "assets/documents/CV.pdf",
    email: "muhammadrafasyazani@gmail.com", // PLACEHOLDER: replace with your real email
    social: { Instagram: "https://www.instagram.com/syaznoels_", GitHub: "https://github.com/Syazzan", Discord: "https://discord.com/users/726262600069021787" }, // PLACEHOLDERS: add your profile URLs
    skills: [["HTML", 80, "Gua belajar nyusun struktur halaman web yang rapi dan gampang dipahami."], ["CSS", 97, "Gua bikin tampilan web yang menarik dan responsif, dari tata letak sampai animasi."], ["JavaScript", 50, "Gua lagi belajar logika pemrograman, manipulasi DOM, dan bikin fitur interaktif."], ["PHP", 30, "Gua lagi kenalan sama dasar backend dan pemrograman sisi server."]],
    tools: ["VS Code", "Git", "GitHub", "Figma", "Chrome DevTools"],
    projects: [
        { n: "01", name: "Personal Portfolio", cat: "Web Design / Frontend", f: "Design", tech: ["HTML", "CSS", "JavaScript", "GSAP"], desc: "Website portfolio pribadi buat ngenalin diri gua, nunjukin skill yang lagi gua pelajari, dan berbagi perjalanan gua di dunia web development.", link: "#", image: "assets/images/portofolio-image.png", bg: "#0b0b0b", art: '<div style="position:absolute;left:8%;top:16%;font:56px/.9 Bebas Neue,Impact;color:#F5F5F5">SYAZZ<br><span style="color:#D71920">PORTFOLIO</span></div>' },
        { n: "02", name: "E-Commerce Website", cat: "Web Development", f: "Development", tech: ["HTML", "CSS", "JavaScript"], desc: "Website toko sepatu online yang gua bikin, lengkap dengan katalog produk dan tampilan yang menyesuaikan berbagai ukuran layar.", link: "https://syazzan.github.io/Syazz-shoes/", image: "assets/images/E-commers-images.png", bg: "#ece9e4", art: '<div style="position:absolute;left:8%;top:18%;font:500 24px/1.15 Inter;color:#111">Shop<br>the<br>collection</div><div style="position:absolute;right:8%;bottom:10%;width:36%;height:55%;background:#a37a55"></div>' },
        { n: "03", name: "Kuliner Website", cat: "Website of culinary", f: "Design", tech: ["Figma", "HTML", "CSS"], desc: "Website kuliner yang gua bikin buat ngenalin makanan Nusantara lewat desain dan tampilan web.", link: "https://syazzan.github.io/kuliner-nusantara/", image: "assets/images/Kulinernusantara-image.png", bg: "#101010" ,art: '<div style="position:absolute;left:8%;top:20%;font:36px/1 Bebas Neue,Impact;color:#F5F5F5">POWER<br>MOTION<br><span style="color:#D71920">ASCENSION</span></div><div style="position:absolute;right:0;bottom:0;width:44%;height:90%;background:linear-gradient(160deg,#D71920,#6a0a10);clip-path:polygon(30% 0,70% 0,100% 100%,0 100%)"></div>' },
        { n: "04", name: "Galery Website", cat: "Galery Foto", f: "Design", tech: ["Figma", "HTML", "CSS","Javascript"], desc: "Website Galeri untuk menapilkan foto-foto yang menakjubkan.", link: "https://syazzan.github.io/Galeri-foto/", image: "assets/images/Sisi-potret.png", bg: "#101010" ,art: '<div style="position:absolute;left:8%;top:20%;font:36px/1 Bebas Neue,Impact;color:#F5F5F5">POWER<br>MOTION<br><span style="color:#D71920">ASCENSION</span></div><div style="position:absolute;right:0;bottom:0;width:44%;height:90%;background:linear-gradient(160deg,#D71920,#6a0a10);clip-path:polygon(30% 0,70% 0,100% 100%,0 100%)"></div>' }],
   
    journey: [["THE BEGINNING", "Awal mula gua penasaran sama dunia web"," Waktu masih kelas 9 MTs, gua mulai tertarik sama yang namanya web development. Rasa penasaran ini yang akhirnya jadi starting point gua buat melangkah lebih jauh."], ["THE BIG DESICION", "Langkah berani demi ngejar passion.","Pas lulus MTs, gua langsung mutusin buat pindah sekolah ke SMK Darussaadah di Bogor. Gua tahu ke mana path yang mau gua tuju."], ["Diving Deep into RPL", "Mulai megang kode dan ngebangun skillset.","Di SMK, gua ambil jurusan RPL. Di sinilah gua mulai belajar the core concepts—gimana sebuah web bisa berjalan, growing, dan proses di balik layarnya."], ["Mastering the Fundamentals", "Mulai megang kode dan ngebangun skillset.","Gua pun fokus belajar pondasi utamanya. Gua pelajarin cara bikin struktur pakai HTML, styling tampilan pakai CSS, sampai bikin web jadi interaktif pakai JavaScript."], ["The Result: This Portfolio!", "Bukti nyata dari proses yang gua laluin.","Nah, website portofolio yang lagi lu lihat sekarang ini adalah milestone hasil belajar gua selama 6 bulan di SMK. This is just the beginning of my journey!."]],
    services: [["FRONTEND DEVELOPMENT", "Gua lagi belajar bikin website responsif pakai HTML, CSS, dan JavaScript.", '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>'], ["WEBSITE DESIGN", "Gua belajar bikin tampilan website yang rapi dan menarik, dengan perhatian ke tipografi, tata letak, dan kenyamanan pengguna.", '<rect x="3" y="4" width="18" height="14" rx="1"/><path d="M8 21h8"/>'], ["INTERACTIVE EXPERIENCES", "Gua lagi ngulik animasi, transisi, dan interaksi kecil biar website terasa lebih hidup.", '<path d="M5 3l14 8-6 2-2 6z"/>']],
    process: [["DISCOVER", "Gua pahami dulu ide, tujuan, dan kebutuhan orang yang bakal pakai.", '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>'], ["PLAN", "Gua susun struktur, tata letak, dan fitur yang dibutuhin.", '<path d="M4 6h16M4 12h10M4 18h6"/>'], ["DESIGN", "Gua tentuin arah visual dan rancang tampilan antarmukanya.", '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>'], ["DEVELOP", "Gua ubah desainnya jadi website yang bisa dipakai.", '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>'], ["IMPROVE", "Gua tes, perbaiki, dan kembangin hasilnya sedikit demi sedikit.", '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>']]
};
/* ===== END CONTENT ===== */
const G = typeof gsap !== 'undefined', RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ic = (p, w = 20) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const arr = '<svg width="34" height="10" viewBox="0 0 34 10" fill="none" stroke="currentColor"><path d="M0 5h33M28 1l5 4-5 4"/></svg>';
const bk = '<svg viewBox="0 0 100 100" fill="none" stroke="#D71920" stroke-width="2"><circle cx="50" cy="50" r="46"/><path d="M4 50h92M50 4v92M18 18q32 32 0 64M82 18q-32 32 0 64"/></svg>';
function img(el, src, alt) { el.innerHTML = bk; if (!src) return; const i = new Image(); i.alt = alt; i.loading = 'eager'; i.onload = () => { el.innerHTML = ''; el.appendChild(i) }; i.src = src }
// portrait fallback silhouette
const pt = $('#pt'); pt.src = CFG.photo; pt.onerror = () => { pt.onerror = null; pt.src = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><path d="M80 1000c10-170 70-250 190-290l90-50h80l90 50c120 40 180 120 190 290z" fill="#1c0e10"/><ellipse cx="400" cy="400" rx="130" ry="165" fill="#2a1719"/><path d="M262 370c-10-130 60-190 140-190s150 60 136 190c-30-70-80-100-136-100s-110 30-140 100z" fill="#100809"/></svg>') };
img($('#ph1'), CFG.about, 'Muhammad Rafa Syazani'); $('#cv').href = CFG.cv;
const links = [{ label: "HOME", id: "home" }, { label: "ABOUT", id: "about" }, { label: "SKILLS", id: "skills" }, { label: "PROJECTS", id: "projects" }, { label: "CONTACT", id: "contact" }];
$('#mm').innerHTML = links.map((l, i) => `<a class="font-display" style="--i:${i}" href="#${l.id}">${l.label}</a>`).join('');
$('#tl').insertAdjacentHTML('beforeend', CFG.journey.map((j, i) => `<div class="timeline-item reveal-on-scroll"><i>0${i + 1}</i><div><h3 class="text-accent text-label">${j[0]}</h3><h4>${j[1]}</h4><p>${j[2]}</p></div></div>`).join(''));
$('#sk').innerHTML = CFG.skills.map(s => `<div class="skill-item reveal-on-scroll"><h3 class="font-display">${s[0]}</h3><span class="skill-percentage font-display">${s[1]}%</span><div class="skill-progress" role="progressbar" aria-label="${s[0]}" aria-valuenow="${s[1]}" aria-valuemin="0" aria-valuemax="100"><i data-w="${s[1]}"></i></div><p>${s[2]}</p></div>`).join('');
$('#tools').innerHTML = CFG.tools.map(t => `<span>${t}</span>`).join('');
$('#sv').innerHTML = CFG.services.map((s, i) => `<div class="reveal-on-scroll"><span>${ic(s[2], 34)}</span><b class="font-display">0${i + 1}</b><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
$('#prc').innerHTML = CFG.process.map((s, i) => `<div class="reveal-on-scroll"><i>${ic(s[2])}</i><b class="font-display">0${i + 1}</b><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
// projects
const cats = ['All', ...new Set(CFG.projects.map(p => p.f))];
$('#fl').innerHTML = cats.map((c, i) => `<button type="button" class="${i ? '' : 'is-active'}" data-c="${c}" aria-pressed="${!i}">${c}</button>`).join('');
$('#pg').innerHTML = CFG.projects.map((p, i) => `<button class="project-card reveal-on-scroll" data-i="${i}" data-f="${p.f}" aria-label="Open ${p.name}"><div class="project-thumbnail"><div style="background:${p.bg}">${p.image ? `<img class="project-thumbnail-image" src="${p.image}" alt="${p.name} thumbnail">` : p.art}</div></div><div class="project-meta"><span class="project-number font-display">${p.n}</span><div><h3>${p.name}</h3><p>${p.cat}</p></div>${arr}</div></button>`).join('');
$$('#fl button').forEach(b => b.onclick = () => { $$('#fl button').forEach(x => { x.classList.toggle('is-active', x === b); x.setAttribute('aria-pressed', x === b) }); $$('.project-card').forEach(c => c.classList.toggle('is-filtered', b.dataset.c !== 'All' && c.dataset.f !== b.dataset.c)) });
const md = $('#md'); let lastF;
function om(i) { const p = CFG.projects[i]; lastF = document.activeElement; $('#mth').innerHTML = `<div style="position:absolute;inset:0;background:${p.bg}">${p.image ? `<img class="project-thumbnail-image" src="${p.image}" alt="${p.name} thumbnail">` : p.art}</div>`; $('#mc').textContent = p.n + ' — ' + p.cat; $('#mt').textContent = p.name; $('#mp').textContent = p.desc; $('#mg').innerHTML = p.tech.map(t => `<span>${t}</span>`).join(''); const ml = $('#ml'); if (p.link && p.link !== '#') { ml.hidden = false; ml.href = p.link; ml.target = '_blank'; ml.rel = 'noopener' } else ml.hidden = true; md.classList.remove('is-closing'); md.classList.add('is-open'); document.body.style.overflow = 'hidden'; $('.modal-close', md).focus() }
function cm() { if (!md.classList.contains('is-open')) return; md.classList.add('is-closing'); setTimeout(() => { md.classList.remove('is-open', 'is-closing'); if (!mm.classList.contains('is-open')) document.body.style.overflow = ''; lastF && lastF.focus() }, RM ? 0 : 220) }
$$('.project-card').forEach(b => b.onclick = () => om(+b.dataset.i)); $('.modal-close', md).onclick = cm; md.onclick = e => { e.target === md && cm() };
addEventListener('keydown', e => {
    if (e.key === 'Escape') { cm(); mn(false) }
    if (e.key === 'Tab' && md.classList.contains('is-open')) { const f = $$('button,a[href]', md).filter(x => !x.hidden && x.offsetParent !== null); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() } }
    if (e.key === 'Tab' && mm.classList.contains('is-open')) { const f = $$('a[href]', mm); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() } }
});
// contact
$('#cl').innerHTML = `<a href="mailto:${CFG.email}">Email <span>${CFG.email}</span></a>` + Object.entries(CFG.social).map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${k}<span>↗</span></a>`).join('');
$('#fn').innerHTML = links.map(l => `<a href="#${l.id}">${l.label}</a>`).join(''); $('#fs').innerHTML = Object.entries(CFG.social).map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener"> ${k.toUpperCase()}</a>`).join('');
$('#f').onsubmit = e => {
    e.preventDefault(); const f = e.target; let ok = true;
    [...f.elements].filter(x => x.name).forEach(x => { const v = x.value.trim(); let m = ''; if (!v) m = 'Bagian ini wajib diisi.'; else if (x.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) m = 'Format emailnya belum valid.'; else if (x.name === 'message' && v.length < 10) m = 'Pesannya minimal 10 karakter, ya.'; x.nextElementSibling.textContent = m; x.setAttribute('aria-invalid', !!m); if (m) ok = false });
    if (!ok) return; const d = Object.fromEntries(new FormData(f));
    location.href = `mailto:${CFG.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message + '\n\n— ' + d.name + ' (' + d.email + ')')}`;
    $('#fm').textContent = 'Aplikasi email kamu bakal kebuka dengan pesan yang udah siap dikirim. Kalau nggak kebuka, email gua langsung di ' + CFG.email + '.'
};
// menu / nav
const bg = $('#bg'), mm = $('#mm'); let menuFocus = null;
function mn(o) {
    bg.setAttribute('aria-expanded', o);
    bg.setAttribute('aria-label', o ? 'Close menu' : 'Open menu');
    mm.classList.toggle('is-open', o);
    mm.setAttribute('aria-hidden', !o);
    mm.inert = !o;
    document.body.style.overflow = o || md.classList.contains('is-open') ? 'hidden' : '';
    if (o) {
        menuFocus = document.activeElement;
        requestAnimationFrame(() => { const first = $('a[href]', mm); first && first.focus() });
    } else if (menuFocus && menuFocus.isConnected) {
        menuFocus.focus();
        menuFocus = null;
    }
}
matchMedia('(min-width:901px)').addEventListener('change', e => e.matches && mn(false));
bg.onclick = () => mn(!mm.classList.contains('is-open'));
$$('#mm a').forEach(a => a.onclick = () => mn(false));
const nl = $$('nav a'), ind = $('#ind'), ids = ['home', 'about', 'skills', 'projects', 'contact'];
const prog = $('#prog'); let tops = [], navM = [], maxS = 1;
function measure() { tops = ids.map(s => $('#' + s).offsetTop); navM = nl.map(a => [a.offsetLeft, a.offsetWidth]); maxS = document.documentElement.scrollHeight - innerHeight }
function spy() { const y = scrollY + innerHeight * .4; let k = 0; tops.forEach((t, i) => { if (t <= y) k = i }); const a = nl[k], m = navM[k] || [0, 0]; ind.style.left = m[0] + 'px'; ind.style.width = m[1] + 'px'; nl.forEach(l => { const active = l === a; l.classList.toggle('is-active', active); if (active) l.setAttribute('aria-current', 'location'); else l.removeAttribute('aria-current') }); $$('#mm a').forEach((l, i) => { const active = i === k; l.classList.toggle('is-active', active); if (active) l.setAttribute('aria-current', 'location'); else l.removeAttribute('aria-current') }); $('#hd').classList.toggle('is-scrolled', scrollY > 40); $('#up').classList.toggle('is-visible', scrollY > 800); prog.style.transform = `scaleX(${maxS > 0 ? Math.min(1, scrollY / maxS) : 0})` }
let tick = false; addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; spy() }) } }, { passive: true });
const wm = $('.hero-wordmark');
function fitWm() { wm.style.fontSize = ''; const r = document.createRange(); r.selectNodeContents(wm); const tw = r.getBoundingClientRect().width, max = innerWidth * .98; if (tw > max) wm.style.fontSize = parseFloat(getComputedStyle(wm).fontSize) * max / tw + 'px' }
document.fonts && document.fonts.ready.then(fitWm);
new ResizeObserver(() => { fitWm(); measure(); spy() }).observe(document.body); measure(); $('#up').onclick = () => scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' });
// reveal
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-revealed'); io.unobserve(e.target) } }), { threshold: .12, rootMargin: '0px 0px -4% 0px' }) : null;
$$('.reveal-on-scroll').forEach(el => { el.style.setProperty('--d', Math.min([...el.parentElement.children].indexOf(el), 5)); el.addEventListener('transitionend', ev => { if (ev.target === el && ev.propertyName === 'opacity') el.classList.add('is-done') }); io ? io.observe(el) : el.classList.add('is-revealed') });
// cursor + magnetic
const cu = $('#cu'); addEventListener('mousemove', e => { cu.style.transform = `translate(${e.clientX}px,${e.clientY}px)` }, { passive: true });
$$('a,button,.image-frame,[role=button]').forEach(el => { el.onmouseenter = () => cu.classList.add('is-hovered'); el.onmouseleave = () => cu.classList.remove('is-hovered') });
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
// playground
let mk = 0, at = 0; const bl = $('#ball'); function shoot() { at++; const hit = Math.random() < .5; if (hit) mk++; $('#sc').textContent = mk + ' / ' + at; $('#sm').textContent = hit ? 'Masuk! 🏀' : 'Meleset, coba lagi!'; G && gsap.fromTo(bl, { y: 0 }, { y: -40, duration: .25, yoyo: true, repeat: 1, ease: 'power2.out' }) }
bl.onclick = shoot; bl.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); shoot() } };
$('#sp').innerHTML = [...'KEEP RISING'].map(c => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('');
const lt = $('#lt'); function mv(x, y) { const r = lt.getBoundingClientRect(); lt.style.setProperty('--x', (x - r.left) + 'px'); lt.style.setProperty('--y', (y - r.top) + 'px') }
lt.addEventListener('pointermove', e => { lt.dataset.u = 1; mv(e.clientX, e.clientY) }, { passive: true }); lt.addEventListener('pointerdown', e => { lt.dataset.u = 1; mv(e.clientX, e.clientY) }, { passive: true });
lt.addEventListener('keydown', e => { const d = { ArrowLeft: [-30, 0], ArrowRight: [30, 0], ArrowUp: [0, -30], ArrowDown: [0, 30] }[e.key]; if (!d) return; e.preventDefault(); lt.dataset.u = 1; const r = lt.getBoundingClientRect(), cx = parseFloat(lt.style.getPropertyValue('--x')) || r.width / 2, cy = parseFloat(lt.style.getPropertyValue('--y')) || r.height / 2; lt.style.setProperty('--x', Math.max(0, Math.min(r.width, cx + d[0])) + 'px'); lt.style.setProperty('--y', Math.max(0, Math.min(r.height, cy + d[1])) + 'px') });
// touch devices: gentle auto-sweep while visible, until the user interacts
if (!fine && !RM) { let raf; const sweep = ts => { if (lt.dataset.u) return; const r = lt.getBoundingClientRect(), t = ts / 1400; lt.style.setProperty('--x', r.width * (.5 + .32 * Math.cos(t)) + 'px'); lt.style.setProperty('--y', r.height * (.5 + .25 * Math.sin(t * 1.3)) + 'px'); raf = requestAnimationFrame(sweep) }; new IntersectionObserver(es => es.forEach(e => { cancelAnimationFrame(raf); if (e.isIntersecting && !lt.dataset.u) raf = requestAnimationFrame(sweep) })).observe(lt) }
// hover typography: touch alternative
const spE = $('#sp'), lift = e => { if (e.pointerType === 'mouse') return; const s = document.elementFromPoint(e.clientX, e.clientY); if (s && s.parentNode === spE) { s.classList.add('is-on'); setTimeout(() => s.classList.remove('is-on'), 700) } };
spE.addEventListener('pointermove', lift, { passive: true }); spE.addEventListener('pointerdown', lift, { passive: true });
// cycling statements
let ci = 0; setInterval(() => { if (!G || document.hidden) return; ci = (ci + 1) % 4; gsap.to('#cy span:first-child', { marginTop: `-${ci}em`, duration: RM ? 0 : .6, ease: 'power3.inOut' }) }, 2200);
// GSAP
function go() {
    gsap.registerPlugin(ScrollTrigger); ScrollTrigger.config({ ignoreMobileResize: true }); document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh()); const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
    $$('.skill-progress i').forEach(b => ScrollTrigger.create({ trigger: b, start: 'top 92%', once: true, onEnter: () => { const pc = b.closest('.skill-item').querySelector('.skill-percentage'), o = { v: 0 }, d = rm ? 0 : 1.4; if (!rm) pc.textContent = '0%'; gsap.to(b, { width: b.dataset.w + '%', duration: d, ease: 'power3.out' }); gsap.to(o, { v: +b.dataset.w, duration: d, ease: 'power3.out', onUpdate: () => { pc.textContent = Math.round(o.v) + '%' } }) } }));
    gsap.to('.learning-timeline .timeline-progress', { height: '100%', ease: 'none', scrollTrigger: { trigger: '#tl', start: 'top 70%', end: 'bottom 70%', scrub: true } });
    $$('.process-grid i').forEach(i => gsap.fromTo(i, { '--p': 0 }, { '--p': 1, duration: .8, scrollTrigger: { trigger: i, start: 'top 85%' } }));
    if (!rm) {
        gsap.from('.hero-content>div:first-child>*', { y: 50, opacity: 0, stagger: .1, duration: 1, delay: .1, ease: 'power3.out' }); gsap.from('.hero-wordmark', { yPercent: 12, opacity: 0, duration: 1.4 }); gsap.from('.hero-portrait', { opacity: 0, scale: 1.05, duration: 1.4 }); gsap.from('.hero-statistics div', { x: 40, opacity: 0, stagger: .12, delay: .5, duration: .9 });
        if (innerWidth > 720) { gsap.to('.hero-wordmark', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } }); gsap.to('.hero-portrait', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } }) }
        if (fine) $$('.button-magnetic').forEach(b => { b.onmousemove = e => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .3, y: (e.clientY - r.top - r.height / 2) * .4, duration: .3 }) }; b.onmouseleave = () => gsap.to(b, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1,.4)' }) })
    }
    spy()
}
addEventListener('load', () => { const l = $('#ld'); if (!G) { l && l.remove(); return } go(); gsap.to('#ld i', { width: 170, duration: .9, ease: 'power2.inOut', onComplete: () => gsap.to(l, { yPercent: -100, duration: .8, ease: 'power3.inOut', onComplete: () => l.remove() }) }) });
setTimeout(() => { const l = $('#ld'); l && l.remove() }, 4500);
// mobile keyboard + form UX
if (window.visualViewport) visualViewport.addEventListener('resize', () => document.body.classList.toggle('kb', innerHeight - visualViewport.height > 150));
if (!fine) $$('#f input,#f textarea').forEach(el => el.addEventListener('focus', () => setTimeout(() => el.scrollIntoView({ block: 'center', behavior: RM ? 'auto' : 'smooth' }), 300)));
$('#sm').setAttribute('aria-live', 'polite');
