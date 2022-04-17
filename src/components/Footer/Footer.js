import React from 'react';
import SimpleReactFooter from "simple-react-footer";
import './Footer.css';

const Footer = () => {
    const description = "I have a consulting farming since 2008, and because—at the prices I charge—I think it’s imperative that prospective clients can get inside my head and see how I think before they engage me.";
    const title = "Why choosing me!?";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
    ];
    return (
        <footer>
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="fluffy_cat_on_linkedin"
                facebook="solo.mizan"
                twitter="fluffy_cat_on_twitter"
                instagram="solo.mizan"
                youtube="UCvetGttXmHJQtOZVvKMavQg"
                pinterest="fluffy_cats_collections"
                copyright="2022 - Agricultural Consult Service"
                iconColor="black"
                backgroundColor="bisque"
                fontColor="black"
                copyrightColor="darkgrey"
            />
        </footer>
    );
};

export default Footer;