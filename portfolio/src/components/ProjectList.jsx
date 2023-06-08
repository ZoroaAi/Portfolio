import VotingSystem from '../images/VotingSystem.png';
import Meliora from '../images/MelioraMarket.png';
import EFS from '../images/EFS.jpg';

const ProjectList = [
    {
        id: 1,
        title: 'Merliora Market',
        description: 'A price comparison website for UK supermarkets. All data was web scraped using selenium and presented to website using Flask framework.',
        imgURL: Meliora,
        projectURL: 'https://github.com/ZoroaAi/MelioraMarket',
    },
    {
        id: 2,
        title: 'Education Fund Scheme',
        description: 'A website that finds the poorest schools in the UK in order to raise funds and provide educational material.',
        imgURL: EFS,
        projectURL: ''
    },
    {
        id: 1,
        title: 'Rule Change Proposal System',
        description: 'Built for creating rule change proposal that allows votes and comments using Java EE 8.',
        imgURL: VotingSystem,
        projectURL: 'https://github.com/ZoroaAi/VotingSystem',
    },
];

export default ProjectList;