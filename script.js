const features = document.getElementById('features');
const company = document.getElementById('company');
const featuresDropdownMenu = document.getElementById('featuresDropdownMenu');
const companyDropdownMenu = document.getElementById('companyDropdownMenu');


function featuresDropdown(){
    featuresDropdownMenu.classList.toggle('hidden');
    if (featuresDropdownMenu.classList.contains('hidden')) {
        features.src = "./images/icon-arrow-down.svg";
    } else {
        features.src = "./images/icon-arrow-up.svg";
    }
}

features.addEventListener("click", featuresDropdown);

function companyDropdown(){
    companyDropdownMenu.classList.toggle('hidden');
    if (companyDropdownMenu.classList.contains('hidden')) {
        company.src = "./images/icon-arrow-down.svg";
    } else {
        company.src = "./images/icon-arrow-up.svg";
    }
}

company.addEventListener("click", companyDropdown);


const mobileMenuFeatures = document.getElementById('mobileMenuFeatures');
const mobileMenuCompany = document.getElementById('mobileMenuCompany');
const mobileMenuFeaturesDropdown = document.getElementById('mobileMenuFeaturesDropdown');
const mobileMenuCompanyDropdown = document.getElementById('mobileMenuCompanyDropdown');

function mobileMenuFeaturesDropdownFunc (){
    mobileMenuFeatures.classList.toggle('hidden');
    if (mobileMenuFeatures.classList.contains('hidden')) {
        mobileMenuFeaturesDropdown.src = "./images/icon-arrow-down.svg";
    } else {
        mobileMenuFeaturesDropdown.src = "./images/icon-arrow-up.svg";
    }
}

mobileMenuFeaturesDropdown.addEventListener("click", mobileMenuFeaturesDropdownFunc)

function mobileMenuCompanyDropdownFunc (){
    mobileMenuCompany.classList.toggle('hidden');
    if (mobileMenuCompany.classList.contains('hidden')) {
        mobileMenuCompanyDropdown.src = "./images/icon-arrow-down.svg";
    } else {
        mobileMenuCompanyDropdown.src = "./images/icon-arrow-up.svg";
    }
}

mobileMenuCompanyDropdown.addEventListener("click", mobileMenuCompanyDropdownFunc);

const hamburgerBtn = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMenu') 

function menuOpen(){
    mobileMenu.classList.remove('hidden');
}

function menuClose(){
    mobileMenu.classList.add('hidden');
}

hamburgerBtn.addEventListener("click", menuOpen);
closeMobileMenu.addEventListener("click", menuClose);
