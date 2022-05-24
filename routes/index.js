const reflectionRoutes = require('./reflection.route');
const discoveryRoutes = require('./discovery.route');
const rebirthcommonRoutes = require('./reflectioncommonword.route');
const rebirthRoutes = require('./rebirth.route');
const facebeliverRoutes = require('./facebeliver.route');
const groupbeliverRoute = require('./groupbeliver.route');
const ValidateRoute = require('./validation.route')
const SmsapiRoute = require('./sms.route');
const Beliver = require('./beliver.route');
const CustomerTab = require('./customer.route');
const CustomerTab2 = require('./cmmTab2.route');
const Tab2ddl = require('./tab2ddl.route');
const CustomerMind3 = require('./customerMind3');
const ValueProposition = require('./valueproposition.route');
const CompetionSheet = require('./competitionsheet.route');
const Vilakshan = require('./vilakshan.route');
const Dashboard = require('./dashboard.route');
const Naisthya = require('./naisthya.route');
const Prayaan = require('./prayaan.route');
const Drishti = require('./drishti.route');
const Shulk_Lakshya = require('./shulkLakshya.route');
const vilakshanMapTab1 = require('./vilakshanMapTab1.route');
const vilakshanMapTab2 = require('./vilakshanMapTab2.route');
const buisenessMod = require('./buisenessMod.route');
const non_negotiable = require('./non_negotiable.route');
const BusiPlayground = require('./busiPlayground.route');
const goal_drillerRaw = require('./goal_drillerRaw.route');
const beliverConcepts = require('./beliverConcepts.route');
const customerSegment = require('./customerSegment.route');
const BusiPlayground2 = require('./busiPlayground2.route');
const Process = require('./process.route');
const parivartan_userRoute = require('./parivartan_user.route');
const admin_login = require('./admin_login.route');
const urjaChar = require('./urjaChar.route');
const drishti_financial_year = require('./drishti_financial_year.route');

module.exports = (router) => {
    reflectionRoutes(router);
    discoveryRoutes(router);
    rebirthcommonRoutes(router);
    rebirthRoutes(router);
    facebeliverRoutes(router);
    groupbeliverRoute(router);
    ValidateRoute(router);
    SmsapiRoute(router)
    Beliver(router);
    CustomerTab(router);
    CustomerTab2(router);
    Tab2ddl(router);
    CustomerMind3(router);
    ValueProposition(router);
    CompetionSheet(router);
    Vilakshan(router);
    Dashboard(router);
    Naisthya(router);
    Prayaan(router);
    Drishti(router);
    Shulk_Lakshya(router);
    Process(router);
    vilakshanMapTab1(router);
    vilakshanMapTab2(router);
    buisenessMod(router);
    non_negotiable(router);
    goal_drillerRaw(router);
    BusiPlayground(router);
    beliverConcepts(router);
    BusiPlayground2(router);
    customerSegment(router);
    parivartan_userRoute(router);
    admin_login(router);
    urjaChar(router);
    drishti_financial_year(router);

    return router;
};
