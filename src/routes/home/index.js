import { h } from 'preact'
import style from './style'
import EventList from '../../components/event-list'

const events = [
  { name: 'Western Canada Regional', key: '2016abca', year: 2016 },
  { name: 'Rocket City Regional', key: '2016alhu', year: 2016 },
  { name: 'Archimedes Division', key: '2016arc', year: 2016 },
  { name: 'Arkansas Rock City Regional', key: '2016arlr', year: 2016 },
  { name: 'Ozark Mountain Brawl', key: '2016aroz', year: 2016 },
  { name: 'Australia Regional', key: '2016ausy', year: 2016 },
  {
    name: 'Sanghi Foundation Arizona FIRST Robotics State Championship',
    key: '2016azcmp',
    year: 2016
  },
  { name: 'Arizona North Regional', key: '2016azfl', year: 2016 },
  { name: 'Arizona West Regional', key: '2016azpx', year: 2016 },
  { name: 'BattleCry 17', key: '2016bc', year: 2016 },
  { name: 'Beantown Blitz', key: '2016bt', year: 2016 },
  { name: 'Battle at the Border', key: '2016cabb', year: 2016 },
  { name: 'Beach Blitz', key: '2016cabl', year: 2016 },
  { name: 'Capital City Classic', key: '2016cacc', year: 2016 },
  { name: 'CalGames', key: '2016cacg', year: 2016 },
  { name: 'Sacramento Regional', key: '2016cada', year: 2016 },
  { name: 'Fall Classic (Day 1)', key: '2016cafc', year: 2016 },
  { name: 'Fall Classic (Day 2)', key: '2016cafc2', year: 2016 },
  { name: 'Los Angeles Regional', key: '2016calb', year: 2016 },
  { name: 'Central Valley Regional', key: '2016cama', year: 2016 },
  { name: 'Orange County Regional', key: '2016capl', year: 2016 },
  { name: 'Carson Division', key: '2016cars', year: 2016 },
  { name: 'Carver Division', key: '2016carv', year: 2016 },
  { name: 'San Diego Regional', key: '2016casd', year: 2016 },
  {
    name: 'Silicon Valley Regional presented by Google.org',
    key: '2016casj',
    year: 2016
  },
  { name: 'SCRRF Spring Scrimmage', key: '2016cass', year: 2016 },
  { name: 'Ventura Regional', key: '2016cave', year: 2016 },
  { name: 'Chezy Champs', key: '2016cc', year: 2016 },
  {
    name:
      'FIRST Chesapeake District Championship sponsored by Booz Allen Hamilton',
    key: '2016chcmp',
    year: 2016
  },
  { name: 'Einstein Field', key: '2016cmp', year: 2016 },
  { name: 'Colorado Regional', key: '2016code', year: 2016 },
  { name: 'NE District - Hartford Event', key: '2016cthar', year: 2016 },
  { name: 'Connecticut State Championship', key: '2016ctsc', year: 2016 },
  { name: 'Suffield Shakedown Scrimmage', key: '2016ctss', year: 2016 },
  { name: 'CowTown ThrowDown', key: '2016cttd', year: 2016 },
  { name: 'NE District - Waterbury Event', key: '2016ctwat', year: 2016 },
  { name: 'Curie Division', key: '2016cur', year: 2016 },
  { name: 'Mission Mayhem', key: '2016flmm', year: 2016 },
  { name: 'Orlando Regional', key: '2016flor', year: 2016 },
  { name: 'Panther Prowl', key: '2016flpp', year: 2016 },
  { name: 'ROBOTICON Tampa Bay', key: '2016flrc', year: 2016 },
  { name: 'South Florida Regional ', key: '2016flwp', year: 2016 },
  { name: 'PCH District - Albany Event', key: '2016gaalb', year: 2016 },
  {
    name: 'Peachtree District State Championship',
    key: '2016gacmp',
    year: 2016
  },
  { name: 'PCH District - Columbus Event', key: '2016gacol', year: 2016 },
  { name: 'PCH District - Dalton Event', key: '2016gadal', year: 2016 },
  {
    name: 'GRITS - Georgia Robotics Invitations Tournament and Showcase',
    key: '2016gagr',
    year: 2016
  },
  { name: 'PCH District - Kennesaw Event', key: '2016gaken', year: 2016 },
  { name: 'Galileo Division', key: '2016gal', year: 2016 },
  { name: 'Great Lakes Bay Bot Bash', key: '2016glbbb', year: 2016 },
  { name: 'HAVOC', key: '2016havoc', year: 2016 },
  { name: 'Summer Heat', key: '2016heat', year: 2016 },
  { name: 'Hawaii Regional', key: '2016hiho', year: 2016 },
  { name: 'Hopper Division', key: '2016hop', year: 2016 },
  { name: 'Iowa Regional', key: '2016iacf', year: 2016 },
  { name: 'Idaho Regional', key: '2016idbo', year: 2016 },
  { name: 'Midwest Regional', key: '2016ilch', year: 2016 },
  { name: 'Central Illinois Regional', key: '2016ilpe', year: 2016 },
  { name: 'Rock River Off-Season Competition', key: '2016ilrr', year: 2016 },
  { name: 'Boiler Bot Battle', key: '2016inbbb', year: 2016 },
  { name: 'Indiana State Championship', key: '2016incmp', year: 2016 },
  { name: 'IN District - Perry Meridian Event', key: '2016inpmh', year: 2016 },
  { name: 'IN District - Walker Warren Event', key: '2016inwch', year: 2016 },
  { name: 'IN District - Tippecanoe Event', key: '2016inwla', year: 2016 },
  { name: 'Indiana Robotics Invitational', key: '2016iri', year: 2016 },
  {
    name: 'IROC - ILITE Robotics Offseason Challenge',
    key: '2016iroc',
    year: 2016
  },
  { name: 'Israel Regional', key: '2016ista', year: 2016 },
  { name: 'Battle for the Bluegrass', key: '2016kybb', year: 2016 },
  { name: 'Bayou Regional', key: '2016lake', year: 2016 },
  { name: 'NE District - Boston Event', key: '2016mabos', year: 2016 },
  { name: 'Bay State Brawl', key: '2016mabsb', year: 2016 },
  { name: 'NE District - UMass-Dartmouth Event', key: '2016manda', year: 2016 },
  {
    name: 'Michigan Advanced Robotics Competition',
    key: '2016marc',
    year: 2016
  },
  { name: 'NE District - North Shore Event', key: '2016marea', year: 2016 },
  { name: 'NE District - WPI Event', key: '2016mawor', year: 2016 },
  { name: "Battle O' Baltimore", key: '2016mdbb', year: 2016 },
  { name: 'CHS District - Greater DC Event', key: '2016mdbet', year: 2016 },
  {
    name: 'CHS District - Northern Maryland Event',
    key: '2016mdblr',
    year: 2016
  },
  {
    name: 'CHS District - Central Maryland Event',
    key: '2016mdedg',
    year: 2016
  },
  { name: 'NE District - Pine Tree Event', key: '2016melew', year: 2016 },
  { name: 'Mainely SPIRIT', key: '2016mems', year: 2016 },
  {
    name: 'FIM District - Ann Arbor Skyline Event',
    key: '2016miann',
    year: 2016
  },
  {
    name: 'Bloomfield Girls Robotics Competition',
    key: '2016mibg',
    year: 2016
  },
  { name: 'FIM District - Woodhaven Event', key: '2016mibro', year: 2016 },
  { name: 'FIM District - Center Line Event', key: '2016micen', year: 2016 },
  { name: 'Michigan State Championship', key: '2016micmp', year: 2016 },
  { name: 'FIM District - Escanaba Event', key: '2016miesc', year: 2016 },
  { name: 'FIM District - Howell Event', key: '2016mihow', year: 2016 },
  {
    name: 'FIM District - Kettering University Event #2',
    key: '2016mike2',
    year: 2016
  },
  { name: 'FIM District - East Kentwood Event', key: '2016miken', year: 2016 },
  {
    name: 'FIM District - Kettering University Event #1',
    key: '2016miket',
    year: 2016
  },
  { name: 'FIM District - Lakeview Event', key: '2016milak', year: 2016 },
  { name: 'FIM District - Lansing Event', key: '2016milan', year: 2016 },
  { name: 'FIM District - Livonia Event', key: '2016miliv', year: 2016 },
  {
    name: 'FIM District - Lake Superior State University Event',
    key: '2016milsu',
    year: 2016
  },
  { name: 'FIM District - Marysville Event', key: '2016mimar', year: 2016 },
  { name: 'FIM District - Midland Event', key: '2016mimid', year: 2016 },
  {
    name: 'ROBO-CON Festival of Robotics and STEM Learning',
    key: '2016mirc',
    year: 2016
  },
  { name: 'FIM District - St. Joseph Event', key: '2016misjo', year: 2016 },
  { name: 'FIM District - Southfield Event', key: '2016misou', year: 2016 },
  {
    name: 'FIM District - Standish-Sterling Event',
    key: '2016mista',
    year: 2016
  },
  { name: 'FIM District - Troy Event', key: '2016mitry', year: 2016 },
  { name: 'FIM District - Traverse City Event', key: '2016mitvc', year: 2016 },
  { name: 'FIM District - Waterford Event', key: '2016miwat', year: 2016 },
  { name: 'FIM District - West Michigan Event', key: '2016miwmi', year: 2016 },
  { name: 'Lake Superior Regional', key: '2016mndu', year: 2016 },
  { name: 'Northern Lights Regional', key: '2016mndu2', year: 2016 },
  { name: 'Gitchi Gummi Get Together', key: '2016mngggt', year: 2016 },
  { name: 'Minnesota 10000 Lakes Regional', key: '2016mnmi', year: 2016 },
  { name: 'Minnesota North Star Regional', key: '2016mnmi2', year: 2016 },
  { name: 'Minnesota Robotics Invitational', key: '2016mnri', year: 2016 },
  {
    name: 'Minnesota State High School League State Championships',
    key: '2016mnsc',
    year: 2016
  },
  { name: 'Gateway Robotics Challenge', key: '2016mogw', year: 2016 },
  { name: 'Greater Kansas City Regional', key: '2016mokc', year: 2016 },
  { name: 'Missouri Robotics State Championship', key: '2016mosc', year: 2016 },
  { name: 'St. Louis Regional', key: '2016mosl', year: 2016 },
  {
    name: 'Mid-Atlantic Robotics District Championship',
    key: '2016mrcmp',
    year: 2016
  },
  { name: 'MadTown ThrowDown', key: '2016mttd', year: 2016 },
  { name: 'Mahoning Valley Robotics Challenge', key: '2016mvrc', year: 2016 },
  { name: 'Mexico City Regional ', key: '2016mxmc', year: 2016 },
  { name: 'NC District - UNC Asheville Event', key: '2016ncash', year: 2016 },
  {
    name: 'NC District - Campbell University/Johnston Community College Event',
    key: '2016ncbui',
    year: 2016
  },
  {
    name: 'NC FIRST Robotics State Championship',
    key: '2016nccmp',
    year: 2016
  },
  { name: 'NC District - Guilford County Event', key: '2016ncmcl', year: 2016 },
  { name: 'NC District - Wake County Event', key: '2016ncral', year: 2016 },
  { name: 'THOR - Thundering Herd of Robots', key: '2016ncth', year: 2016 },
  { name: 'New England District Championship', key: '2016necmp', year: 2016 },
  { name: 'Newton Division', key: '2016new', year: 2016 },
  { name: 'Battle of the Bay', key: '2016nhbb', year: 2016 },
  { name: 'NE District - UNH Event', key: '2016nhdur', year: 2016 },
  { name: 'NE District - Granite State Event', key: '2016nhgrs', year: 2016 },
  { name: 'Mayhem in Merrimack', key: '2016nhmm', year: 2016 },
  { name: 'RiverRage 20', key: '2016nhrr', year: 2016 },
  {
    name: 'MAR District - Bridgewater-Raritan Event',
    key: '2016njbri',
    year: 2016
  },
  { name: 'Duel on the Delaware', key: '2016njdd', year: 2016 },
  { name: 'MAR District - Mt. Olive Event', key: '2016njfla', year: 2016 },
  { name: 'MidKnight Mayhem IV', key: '2016njmm', year: 2016 },
  { name: 'MAR District - Montgomery Event', key: '2016njski', year: 2016 },
  { name: 'MAR District - Seneca Event', key: '2016njtab', year: 2016 },
  { name: 'Las Vegas Regional', key: '2016nvlv', year: 2016 },
  {
    name: 'HHH (Half Hollow Hills) Robotics Annual Invitational Tournament',
    key: '2016nyhhh',
    year: 2016
  },
  { name: 'Hudson Valley Rally', key: '2016nyhvr', year: 2016 },
  { name: 'SBPLI Long Island Regional', key: '2016nyli', year: 2016 },
  { name: 'New York City Regional', key: '2016nyny', year: 2016 },
  { name: 'Finger Lakes Regional ', key: '2016nyro', year: 2016 },
  { name: 'Rah Cha Cha Ruckus', key: '2016nyrr', year: 2016 },
  { name: 'New York Tech Valley Regional', key: '2016nytr', year: 2016 },
  { name: 'Tech Valley Robot Rumble', key: '2016nytv', year: 2016 },
  { name: 'Queen City Regional', key: '2016ohci', year: 2016 },
  { name: 'Buckeye Regional', key: '2016ohcl', year: 2016 },
  { name: 'Ohio FRC State Championship', key: '2016ohsc', year: 2016 },
  { name: 'Oklahoma Regional ', key: '2016okok', year: 2016 },
  { name: 'North Bay Regional', key: '2016onnb', year: 2016 },
  { name: 'STEMley Cup Championship', key: '2016onsc', year: 2016 },
  { name: 'Greater Toronto East Regional ', key: '2016onto', year: 2016 },
  { name: 'Greater Toronto Central Regional', key: '2016onto2', year: 2016 },
  { name: 'Waterloo Regional ', key: '2016onwa', year: 2016 },
  { name: 'Windsor Essex Great Lakes Regional', key: '2016onwi', year: 2016 },
  {
    name: 'PNW District - Clackamas Academy of Industrial Science Event',
    key: '2016orore',
    year: 2016
  },
  { name: 'PNW District - Philomath Event', key: '2016orphi', year: 2016 },
  { name: 'PNW District - Wilsonville Event', key: '2016orwil', year: 2016 },
  { name: 'Greater Pittsburgh Regional', key: '2016paca', year: 2016 },
  { name: 'girlPOWER', key: '2016pagp', year: 2016 },
  {
    name: 'MAR District - Hatboro-Horsham Event',
    key: '2016pahat',
    year: 2016
  },
  {
    name: 'MAR District - Springside Chestnut Hill Event',
    key: '2016paphi',
    year: 2016
  },
  { name: 'Ramp Riot', key: '2016parr', year: 2016 },
  { name: 'MAR District - Westtown Event', key: '2016pawch', year: 2016 },
  {
    name: 'Pacific Northwest District Championship sponsored by Autodesk',
    key: '2016pncmp',
    year: 2016
  },
  {
    name: 'FRC Festival de Robotique - Montreal Regional',
    key: '2016qcmo',
    year: 2016
  },
  { name: 'NE District - Rhode Island Event', key: '2016ripro', year: 2016 },
  { name: 'Red Stick Rumble', key: '2016rsr', year: 2016 },
  { name: 'Palmetto Regional', key: '2016scmb', year: 2016 },
  { name: 'Tesla Division', key: '2016tes', year: 2016 },
  { name: 'Smoky Mountains Regional', key: '2016tnkn', year: 2016 },
  { name: 'TNT Week Zero T&L Field', key: '2016tnt', year: 2016 },
  { name: 'Dallas Regional', key: '2016txda', year: 2016 },
  { name: 'Lone Star Regional', key: '2016txho', year: 2016 },
  { name: 'Hub City Regional', key: '2016txlu', year: 2016 },
  { name: 'Texas Robotics Invitational', key: '2016txri', year: 2016 },
  { name: 'The Remix', key: '2016txrm', year: 2016 },
  {
    name: 'Texas Robot Roundup: UIL Robotics State Championship',
    key: '2016txrr',
    year: 2016
  },
  { name: "Rattlin' Robot Rodeo", key: '2016txrrr', year: 2016 },
  {
    name: 'Alamo Regional sponsored by Rackspace Hosting',
    key: '2016txsa',
    year: 2016
  },
  { name: 'Utah Regional', key: '2016utwv', year: 2016 },
  {
    name: 'CHS District - Southwest Virginia Event',
    key: '2016vabla',
    year: 2016
  },
  {
    name: 'CHS District - Central Virginia Event',
    key: '2016vados',
    year: 2016
  },
  {
    name: 'CHS District - Northern Virginia Event',
    key: '2016vahay',
    year: 2016
  },
  { name: 'CHS District - Hampton Roads Event', key: '2016vapor', year: 2016 },
  { name: 'Rumble in the Roads', key: '2016varr', year: 2016 },
  { name: 'PNW District - Auburn Event', key: '2016waahs', year: 2016 },
  {
    name: 'PNW District - Auburn Mountainview Event',
    key: '2016waamv',
    year: 2016
  },
  {
    name: 'PNW District - Central Washington University Event',
    key: '2016waell',
    year: 2016
  },
  { name: 'Washington Girls Generation', key: '2016wagg', year: 2016 },
  { name: 'PNW District - Mount Vernon Event', key: '2016wamou', year: 2016 },
  { name: 'Peak Performance', key: '2016wapp', year: 2016 },
  { name: 'Robot Rewind', key: '2016warr', year: 2016 },
  { name: 'PNW District - Glacier Peak Event', key: '2016wasno', year: 2016 },
  { name: 'PNW District - West Valley Event', key: '2016waspo', year: 2016 },
  { name: 'Week 0', key: '2016week0', year: 2016 },
  { name: 'Wisconsin Regional', key: '2016wimi', year: 2016 },
  { name: 'Where is Wolcott Invitational', key: '2016wiwi', year: 2016 },
  { name: 'West Michigan Robotics Invitational', key: '2016wmri', year: 2016 },
  { name: 'West Virginia RObotics eXtreme', key: '2016wvrox', year: 2016 },
  { name: 'Western Canada Regional', key: '2017abca', year: 2017 },
  { name: 'Rocket City Regional', key: '2017alhu', year: 2017 },
  { name: 'Archimedes Division', key: '2017arc', year: 2017 },
  { name: 'Arkansas Rock City Regional', key: '2017arli', year: 2017 },
  { name: 'Ozark Mountain Brawl', key: '2017aroz', year: 2017 },
  { name: 'Duel Down Under', key: '2017audd', year: 2017 },
  { name: 'Redbacks Scrimmage', key: '2017aurb', year: 2017 },
  { name: 'Southern Cross Regional', key: '2017ausc', year: 2017 },
  { name: 'South Pacific Regional', key: '2017ausp', year: 2017 },
  {
    name: 'Sanghi Foundation FRC AZ State Championship',
    key: '2017azcmp',
    year: 2017
  },
  { name: 'Arizona North Regional', key: '2017azfl', year: 2017 },
  { name: 'Arizona West Regional', key: '2017azpx', year: 2017 },
  { name: 'BattleCry 18', key: '2017bc', year: 2017 },
  { name: 'Beantown Blitz', key: '2017bt', year: 2017 },
  { name: 'Beach Blitz', key: '2017cabl', year: 2017 },
  { name: 'Capital City Classic', key: '2017cacc', year: 2017 },
  { name: 'CalGames', key: '2017cacg', year: 2017 },
  { name: 'Sacramento Regional', key: '2017cada', year: 2017 },
  { name: 'Orange County Regional', key: '2017cair', year: 2017 },
  { name: 'Los Angeles Regional', key: '2017calb', year: 2017 },
  { name: 'Central Valley Regional', key: '2017cama', year: 2017 },
  { name: 'Pre-Bag Scrimmage', key: '2017capb', year: 2017 },
  { name: 'Carson Division', key: '2017cars', year: 2017 },
  { name: 'Carver Division', key: '2017carv', year: 2017 },
  {
    name: 'San Diego Regional presented by Qualcomm',
    key: '2017casd',
    year: 2017
  },
  { name: 'San Francisco Regional', key: '2017casf', year: 2017 },
  { name: 'Silicon Valley Regional', key: '2017casj', year: 2017 },
  { name: 'Ventura Regional', key: '2017cave', year: 2017 },
  { name: 'Chezy Champs', key: '2017cc', year: 2017 },
  {
    name:
      'FIRST Chesapeake District Championship sponsored by Booz Allen Hamilton',
    key: '2017chcmp',
    year: 2017
  },
  { name: 'Centurion-Krawler Week Zero', key: '2017ckw0', year: 2017 },
  { name: 'Einstein Field (St. Louis)', key: '2017cmpmo', year: 2017 },
  { name: 'Einstein Field (Houston)', key: '2017cmptx', year: 2017 },
  { name: 'Colorado Regional', key: '2017code', year: 2017 },
  { name: 'China Robotics Challenge', key: '2017crc', year: 2017 },
  {
    name: 'China Robotics Challenge (China Only)',
    key: '2017crc2',
    year: 2017
  },
  { name: 'NE District - Hartford Event', key: '2017cthar', year: 2017 },
  { name: 'Connecticut State Championship', key: '2017ctsc', year: 2017 },
  { name: 'Suffield Shakedown Scrimmage', key: '2017ctss', year: 2017 },
  { name: 'Cowtown Throwdown', key: '2017cttd', year: 2017 },
  { name: 'NE District - Waterbury Event', key: '2017ctwat', year: 2017 },
  { name: 'Curie Division', key: '2017cur', year: 2017 },
  { name: 'Daly Division', key: '2017dal', year: 2017 },
  { name: 'Darwin Division', key: '2017dar', year: 2017 },
  { name: 'Mission Mayhem', key: '2017flmm', year: 2017 },
  { name: 'Orlando Regional', key: '2017flor', year: 2017 },
  { name: 'ROBOTICON Tampa Bay', key: '2017flrc', year: 2017 },
  { name: 'South Florida Regional ', key: '2017flwp', year: 2017 },
  { name: 'PCH District - Albany Event', key: '2017gaalb', year: 2017 },
  { name: 'Peachtree State Championship', key: '2017gacmp', year: 2017 },
  { name: 'PCH District - Columbus Event', key: '2017gacol', year: 2017 },
  { name: 'PCH District - Dalton Event', key: '2017gadal', year: 2017 },
  { name: 'PCH District - Gainesville Event', key: '2017gagai', year: 2017 },
  {
    name: 'Georgia Robotics Invitational Tournament & Showcase',
    key: '2017gagr',
    year: 2017
  },
  { name: 'Galileo Division', key: '2017gal', year: 2017 },
  { name: 'Great Lakes Bay Bot Bash', key: '2017glbbb', year: 2017 },
  { name: 'Shenzhen Regional', key: '2017gush', year: 2017 },
  { name: 'HAVOC', key: '2017havoc', year: 2017 },
  { name: 'Hawaii Regional', key: '2017hiho', year: 2017 },
  { name: 'Hopper Division', key: '2017hop', year: 2017 },
  { name: 'Iowa Regional', key: '2017iacf', year: 2017 },
  { name: 'Idaho Regional', key: '2017idbo', year: 2017 },
  { name: 'Midwest Regional', key: '2017ilch', year: 2017 },
  { name: 'Central Illinois Regional', key: '2017ilpe', year: 2017 },
  { name: 'Rock River Off-Season Competition', key: '2017ilrr', year: 2017 },
  { name: 'Boiler Bot Battle', key: '2017inbbb', year: 2017 },
  { name: 'CAGE Match', key: '2017incm', year: 2017 },
  { name: 'Indiana State Championship', key: '2017incmp', year: 2017 },
  { name: 'IN District - St. Joseph Event', key: '2017inmis', year: 2017 },
  { name: 'IN District - Perry Meridian Event', key: '2017inpmh', year: 2017 },
  { name: 'IndyRAGE', key: '2017inrg', year: 2017 },
  { name: 'IN District - Tippecanoe Event', key: '2017inwla', year: 2017 },
  { name: 'Indiana Robotics Invitational', key: '2017iri', year: 2017 },
  { name: 'IROC', key: '2017iroc', year: 2017 },
  { name: 'FIRST Israel District Championship', key: '2017iscmp', year: 2017 },
  { name: 'ISR District Event #1', key: '2017isde1', year: 2017 },
  { name: 'ISR District Event #2', key: '2017isde2', year: 2017 },
  { name: 'ISR District Event #3', key: '2017isde3', year: 2017 },
  { name: 'ISR District Event #4', key: '2017isde4', year: 2017 },
  { name: 'Kansas Cup', key: '2017kscup', year: 2017 },
  { name: 'Battle for the Bluegrass', key: '2017kybb', year: 2017 },
  { name: 'Bayou Regional', key: '2017lake', year: 2017 },
  { name: 'NE District - Greater Boston Event', key: '2017mabos', year: 2017 },
  { name: 'NE District - SE Mass Event', key: '2017mabri', year: 2017 },
  { name: 'Bay State Brawl', key: '2017mabsb', year: 2017 },
  {
    name: 'Michigan Advanced Robotics Competition',
    key: '2017marc',
    year: 2017
  },
  { name: 'NE District - North Shore Event', key: '2017marea', year: 2017 },
  {
    name: 'NE District - Worcester Polytechnic Institute Event',
    key: '2017mawor',
    year: 2017
  },
  { name: "Battle O' Baltimore", key: '2017mdbb', year: 2017 },
  {
    name: 'CHS District - Greater DC Event sponsored by Accenture',
    key: '2017mdbet',
    year: 2017
  },
  {
    name: 'CHS District - Central Maryland Event sponsored by Leidos',
    key: '2017mdedg',
    year: 2017
  },
  {
    name: 'CHS District - Northern Maryland Event',
    key: '2017mdowi',
    year: 2017
  },
  { name: 'NE District - Pine Tree Event', key: '2017melew', year: 2017 },
  { name: 'Mainely Spirit', key: '2017mems', year: 2017 },
  { name: 'Summer Heat', key: '2017mesh', year: 2017 },
  {
    name: 'FIM District - Ann Arbor Pioneer Event',
    key: '2017miann',
    year: 2017
  },
  { name: 'Big Bang', key: '2017mibb', year: 2017 },
  { name: 'FIM District - Woodhaven Event', key: '2017mibro', year: 2017 },
  { name: 'FIM District - Center Line Event', key: '2017micen', year: 2017 },
  { name: 'Michigan State Championship', key: '2017micmp', year: 2017 },
  {
    name: 'Michigan State Championship - Consumers Energy Division',
    key: '2017micmp1',
    year: 2017
  },
  {
    name: 'Michigan State Championship - Dow Division',
    key: '2017micmp2',
    year: 2017
  },
  {
    name: 'Michigan State Championship - DTE Energy Foundation Division',
    key: '2017micmp3',
    year: 2017
  },
  {
    name: 'Michigan State Championship - Ford Division',
    key: '2017micmp4',
    year: 2017
  },
  { name: 'FIM District - Escanaba Event', key: '2017miesc', year: 2017 },
  { name: 'FIM District - Gaylord Event', key: '2017migay', year: 2017 },
  {
    name: 'Grand Rapids Girls Robotics Competition',
    key: '2017migrg',
    year: 2017
  },
  { name: 'FIM District - Gull Lake Event', key: '2017migul', year: 2017 },
  { name: 'FIM District - Howell Event', key: '2017mihow', year: 2017 },
  { name: 'Kettering Week  0.5', key: '2017mike0', year: 2017 },
  {
    name: 'FIM District - Kettering University Event #2',
    key: '2017mike2',
    year: 2017
  },
  { name: 'FIM District - East Kentwood Event', key: '2017miken', year: 2017 },
  {
    name: 'FIM District - Kettering University Event #1',
    key: '2017miket',
    year: 2017
  },
  { name: 'Kettering Kickoff', key: '2017mikk', year: 2017 },
  { name: 'FIM District - Lakeview Event', key: '2017milak', year: 2017 },
  { name: 'FIM District - Lansing Event', key: '2017milan', year: 2017 },
  { name: 'FIM District - Livonia Event', key: '2017miliv', year: 2017 },
  {
    name: 'FIM District - Lake Superior State University Event',
    key: '2017milsu',
    year: 2017
  },
  { name: 'FIM District - Marysville Event', key: '2017mimar', year: 2017 },
  { name: 'FIM District - Midland Event', key: '2017mimid', year: 2017 },
  { name: 'FIM District - Shepherd Event', key: '2017mishe', year: 2017 },
  { name: 'FIM District - St. Joseph Event', key: '2017misjo', year: 2017 },
  { name: 'FIM District - Southfield Event', key: '2017misou', year: 2017 },
  { name: 'FIM District - Troy Event', key: '2017mitry', year: 2017 },
  { name: 'FIM District - Traverse City Event', key: '2017mitvc', year: 2017 },
  { name: 'FIM District - Waterford Event', key: '2017miwat', year: 2017 },
  { name: 'FIM District - West Michigan Event', key: '2017miwmi', year: 2017 },
  {
    name: 'Minnesota State High School League State Championship',
    key: '2017mncmp',
    year: 2017
  },
  { name: 'Lake Superior Regional', key: '2017mndu', year: 2017 },
  { name: 'Northern Lights Regional', key: '2017mndu2', year: 2017 },
  {
    name: 'East Metro Collaborative Competition',
    key: '2017mnemcc',
    year: 2017
  },
  { name: 'Gitchi Gummi Get-Together', key: '2017mngggt', year: 2017 },
  { name: 'Minnesota 10000 Lakes Regional', key: '2017mnmi', year: 2017 },
  { name: 'Minnesota North Star Regional', key: '2017mnmi2', year: 2017 },
  { name: 'Minne Mini', key: '2017mnmn', year: 2017 },
  { name: 'Minnesota Robotics Invitational', key: '2017mnri', year: 2017 },
  { name: 'Northern MN Week Zero', key: '2017mnw0', year: 2017 },
  { name: 'Gateway Robotics Challenge', key: '2017mogw', year: 2017 },
  { name: 'Greater Kansas City Regional', key: '2017mokc', year: 2017 },
  { name: 'Missouri State Championship', key: '2017mosc', year: 2017 },
  { name: 'St. Louis Regional', key: '2017mosl', year: 2017 },
  {
    name:
      'FIRST Mid-Atlantic District Championship sponsored by Johnson & Johnson',
    key: '2017mrcmp',
    year: 2017
  },
  { name: 'Beach Bot Battle', key: '2017msbbb', year: 2017 },
  { name: 'MadTown Throwdown', key: '2017mttd', year: 2017 },
  { name: 'Mahoning Valley Robotics Challenge', key: '2017mvrc', year: 2017 },
  { name: 'Toluca Regional', key: '2017mxtl', year: 2017 },
  { name: 'Laguna Regional', key: '2017mxto', year: 2017 },
  { name: 'NC District - UNC Asheville Event', key: '2017ncash', year: 2017 },
  {
    name: 'FIRST North Carolina State Championship',
    key: '2017nccmp',
    year: 2017
  },
  { name: 'NC District - Greensboro Event', key: '2017ncgre', year: 2017 },
  { name: 'NC District - Raleigh Event', key: '2017ncral', year: 2017 },
  { name: 'THOR @ UNC Pembroke', key: '2017ncth', year: 2017 },
  { name: 'THOR @ Raleigh', key: '2017ncth2', year: 2017 },
  { name: 'NC District - Pitt County Event', key: '2017ncwin', year: 2017 },
  { name: 'New England District Championship', key: '2017necmp', year: 2017 },
  { name: 'Newton Division', key: '2017new', year: 2017 },
  { name: 'Battle Of the Bay', key: '2017nhbb', year: 2017 },
  { name: 'NE District - Southern NH Event', key: '2017nhbed', year: 2017 },
  { name: 'FIRST Festival of Champions', key: '2017nhfoc', year: 2017 },
  { name: 'NE District - Granite State Event', key: '2017nhgrs', year: 2017 },
  { name: 'Mayhem In Merrimack', key: '2017nhmm', year: 2017 },
  { name: 'RiverRage 21', key: '2017nhrr', year: 2017 },
  { name: 'Brunswick Eruption', key: '2017njbe', year: 2017 },
  {
    name: 'MAR District - Bridgewater-Raritan Event',
    key: '2017njbri',
    year: 2017
  },
  { name: 'Duel on the Delaware', key: '2017njdd', year: 2017 },
  { name: 'MAR District - Mount Olive Event', key: '2017njfla', year: 2017 },
  { name: 'MidKnight Mayhem V', key: '2017njmm', year: 2017 },
  { name: 'MAR District - Montgomery Event', key: '2017njski', year: 2017 },
  { name: 'MAR District - Seneca Event', key: '2017njtab', year: 2017 },
  {
    name: 'Northern Minnesota Robotics Conference Tournament',
    key: '2017nmrcc',
    year: 2017
  },
  { name: 'Las Vegas Regional', key: '2017nvlv', year: 2017 },
  { name: 'Ferris State Roboday', key: '2017nyfs', year: 2017 },
  { name: 'Half Hollow Hills Invitational', key: '2017nyhhh', year: 2017 },
  { name: 'Hudson Valley Rally', key: '2017nyhvr', year: 2017 },
  { name: 'SBPLI Long Island Regional', key: '2017nyli', year: 2017 },
  { name: 'New York City Regional', key: '2017nyny', year: 2017 },
  { name: 'Finger Lakes Regional ', key: '2017nyro', year: 2017 },
  { name: 'Rah Cha Cha Ruckus', key: '2017nyrr', year: 2017 },
  { name: 'Hudson Valley Regional', key: '2017nysu', year: 2017 },
  { name: 'New York Tech Valley Regional', key: '2017nytr', year: 2017 },
  { name: 'Tech Valley Robot Rumble', key: '2017nytv', year: 2017 },
  { name: 'Buckeye Regional', key: '2017ohcl', year: 2017 },
  { name: 'CORI Invitational ', key: '2017ohri', year: 2017 },
  { name: 'Miami Valley Regional', key: '2017ohsp', year: 2017 },
  { name: 'Oklahoma Regional ', key: '2017okok', year: 2017 },
  {
    name: 'ONT District - Georgian College Event',
    key: '2017onbar',
    year: 2017
  },
  {
    name: 'FIRST Ontario Provincial Championship',
    key: '2017oncmp',
    year: 2017
  },
  { name: 'Fall Fiesta', key: '2017onff', year: 2017 },
  {
    name: 'ONT District - McMaster University Event',
    key: '2017onham',
    year: 2017
  },
  {
    name: 'ONT District - Western University, Engineering Event',
    key: '2017onlon',
    year: 2017
  },
  { name: 'ONT District - North Bay Event', key: '2017onnob', year: 2017 },
  { name: 'ONT District - Durham College Event', key: '2017onosh', year: 2017 },
  { name: 'STEMley Cup Championship', key: '2017onsc', year: 2017 },
  { name: 'Southwest International', key: '2017onsi', year: 2017 },
  {
    name: 'ONT District - Ryerson University Event',
    key: '2017onto1',
    year: 2017
  },
  {
    name: 'ONT District - Victoria Park Collegiate Event',
    key: '2017onto2',
    year: 2017
  },
  {
    name: 'ONT District - University of Waterloo Event',
    key: '2017onwat',
    year: 2017
  },
  {
    name: 'ONT District - Windsor Essex Great Lakes Event',
    key: '2017onwin',
    year: 2017
  },
  { name: 'BunnyBots', key: '2017orbb', year: 2017 },
  { name: 'Girls Generation Oregon', key: '2017orgg', year: 2017 },
  { name: 'PNW District - Lake Oswego Event', key: '2017orlak', year: 2017 },
  {
    name: 'PNW District - Clackamas Academy of Industrial Science Event',
    key: '2017orore',
    year: 2017
  },
  { name: 'PNW District - Wilsonville Event', key: '2017orwil', year: 2017 },
  { name: 'Greater Pittsburgh Regional', key: '2017paca', year: 2017 },
  { name: 'GirlPOWER', key: '2017pagp', year: 2017 },
  {
    name: 'MAR District - Hatboro-Horsham Event',
    key: '2017pahat',
    year: 2017
  },
  {
    name: 'MAR District - Springside Chestnut Hill Academy Event',
    key: '2017paphi',
    year: 2017
  },
  { name: 'Ramp Riot', key: '2017parr', year: 2017 },
  { name: 'Steel City Showdown', key: '2017pascs', year: 2017 },
  { name: 'MAR District - Westtown Event', key: '2017pawch', year: 2017 },
  {
    name: 'Pacific Northwest District Championship',
    key: '2017pncmp',
    year: 2017
  },
  {
    name: 'Festival de Robotique - Montreal Regional',
    key: '2017qcmo',
    year: 2017
  },
  { name: 'NE District - Rhode Island Event', key: '2017ripro', year: 2017 },
  { name: 'Roebling Division', key: '2017roe', year: 2017 },
  { name: 'Red Stick Rumble', key: '2017rsr', year: 2017 },
  { name: 'Palmetto Regional', key: '2017scmb', year: 2017 },
  {
    name: 'SCRIW (South Carolina Robotics Invitational & Workshops)',
    key: '2017scriw',
    year: 2017
  },
  { name: 'Tesla Division', key: '2017tes', year: 2017 },
  { name: 'Smoky Mountains Regional', key: '2017tnkn', year: 2017 },
  { name: 'Tennessee Valley Fair Robo-Rodeo', key: '2017tnvfrr', year: 2017 },
  { name: 'Turing Division', key: '2017tur', year: 2017 },
  { name: 'Turkish Robotics Off-Season', key: '2017turk', year: 2017 },
  { name: 'Dallas Regional', key: '2017txda', year: 2017 },
  { name: 'Lone Star Central Regional', key: '2017txho', year: 2017 },
  { name: 'Hub City Regional', key: '2017txlu', year: 2017 },
  { name: 'North Texas Tournament of Robots', key: '2017txntx', year: 2017 },
  { name: 'Texas Robotics Invitational', key: '2017txri', year: 2017 },
  { name: 'The Remix', key: '2017txrm', year: 2017 },
  { name: 'Texas Robot Roundup', key: '2017txrr', year: 2017 },
  { name: 'Alamo Regional', key: '2017txsa', year: 2017 },
  { name: 'Texas UIL State Championship', key: '2017txsc', year: 2017 },
  { name: 'Brazos Valley Regional', key: '2017txwa', year: 2017 },
  { name: 'Lone Star North Regional', key: '2017txwo', year: 2017 },
  { name: 'Utah Regional', key: '2017utwv', year: 2017 },
  {
    name: 'CHS District - Southwest Virginia Event',
    key: '2017vabla',
    year: 2017
  },
  {
    name: 'CHS District - Central Virginia Event',
    key: '2017vagle',
    year: 2017
  },
  {
    name: 'CHS District - Northern Virginia Event sponsored by Bechtel',
    key: '2017vahay',
    year: 2017
  },
  { name: 'Mid-Atlantic Robotics Showdown', key: '2017vamars', year: 2017 },
  {
    name:
      'CHS District - Hampton Roads Event sponsored by Newport News Shipbuilding',
    key: '2017vapor',
    year: 2017
  },
  { name: 'Rumble in the Roads', key: '2017varr', year: 2017 },
  { name: 'PNW District - Auburn Event', key: '2017waahs', year: 2017 },
  {
    name: 'PNW District - Auburn Mountainview Event',
    key: '2017waamv',
    year: 2017
  },
  {
    name: 'PNW District - Central Washington University Event',
    key: '2017waell',
    year: 2017
  },
  { name: 'Washington Girls Generation', key: '2017wagg', year: 2017 },
  { name: 'PNW District - Mount Vernon Event', key: '2017wamou', year: 2017 },
  { name: 'Peak Performance', key: '2017wapp', year: 2017 },
  { name: 'Robot Rewind', key: '2017warr', year: 2017 },
  { name: 'PNW District - Glacier Peak Event', key: '2017wasno', year: 2017 },
  { name: 'PNW District - West Valley Event', key: '2017waspo', year: 2017 },
  { name: 'Week 0', key: '2017week0', year: 2017 },
  { name: 'Seven Rivers Regional', key: '2017wila', year: 2017 },
  { name: 'Wisconsin Regional', key: '2017wimi', year: 2017 },
  { name: 'Where is Wolcott Invitational', key: '2017wiwi', year: 2017 },
  { name: 'West Michigan Robotics Invitational ', key: '2017wmri', year: 2017 },
  { name: 'WOW Championship', key: '2017wowcmp', year: 2017 }
]

export default () => (
  <div class={style.home}>
    <h1>Pigmice Scouting</h1>
    <EventList events={events} />
  </div>
)
