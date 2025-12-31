export interface Dictionary {
    navigation: {
        home: string;
        earn: string;
        redeem: string;
        tiers: string;
        signIn: string;
        joinNow: string;
    };
    hero: {
        title: string;
        subtitle: string;
        joinNow: string;
        learnMore: string;
    };
    footer: {
        description: string;
        program: string;
        tierLevels: string;
        earnMiles: string;
        redeemMiles: string;
        support: string;
        contactUs: string;
        faq: string;
        termsConditions: string;
        followUs: string;
        rightsReserved: string;
    };
    benefits: {
        title: string;
        subtitle: string;
        earn: {
            title: string;
            description: string;
            text: string;
        };
        lounge: {
            title: string;
            description: string;
            text: string;
        };
        priority: {
            title: string;
            description: string;
            text: string;
        };
    };
    tiersSection: {
        title: string;
        description: string;
        blue: string;
        silver: string;
        gold: string;
        elite: string;
        platinum: string;
        viewAll: string;
    };
    auth: {
        signIn: {
            title: string;
            description: string;
            membershipId: string;
            password: string;
            forgotPin: string;
            submit: string;
            submitting: string;
            notMember: string;
            join: string;
        };
        signUp: {
            title: string;
            description: string;
            step1: string;
            step2: string;
            step3: string;
            titleLabel: string;
            firstName: string;
            middleName: string;
            lastName: string;
            gender: string;
            dob: string;
            nationality: string;
            email: string;
            mobile: string;
            address: string;
            country: string;
            city: string;
            postalCode: string;
            marketingConsent: string;
            termsConsent: string;
            privacyConsent: string;
            submit: string;
            alreadyMember: string;
            loginHere: string;
        };
    };
    earn: {
        title: string;
        subtitle: string;
        fly: {
            title: string;
            description: string;
            table: {
                cabin: string;
                booking: string;
                miles: string;
            };
            disclaimer: string;
        };
        starAlliance: {
            title: string;
            subtitle: string;
            description: string;
            list: string[];
            didYouKnow: {
                title: string;
                text: string;
            };
            viewList: string;
            pageTitle: string;
            pageSubtitle: string;
            intro: string;
            chartsTitle: string;
            chartsDisclaimer: string;
            memberAirlinesTitle: string;
            backToEarn: string;
            tableHeaders: {
                class: string;
                earned: string;
            };
        };
        cobranded: {
            title: string;
            description: string;
            text: string;
            cta: string;
        };
        hotels: {
            title: string;
            description: string;
            text: string;
            cta: string;
        };
        missing: {
            title: string;
            text: string;
            cta: string;
        };
        cta: {
            title: string;
            text: string;
            checkBalance: string;
        };
        calculator: {
            title: string;
            subtitle: string;
            from: string;
            to: string;
            class: string;
            button: string;
            result: string;
            disclaimer: string;
        };
    };
    redeem: {
        title: string;
        subtitle: string;
        flights: {
            title: string;
            text: string;
            cta: string;
        };
        upgrade: {
            title: string;
            text: string;
            cta: string;
        };
        baggage: {
            title: string;
            text: string;
            cta: string;
        };
    };
    tiers: {
        title: string;
        subtitle: string;
        qualification: string;
        entryLevel: string;
        cta: {
            title: string;
            subtitle: string;
            button: string;
        };
        levels: {
            blue: {
                name: string;
                description: string;
                benefits: string[];
            };
            silver: {
                name: string;
                description: string;
                benefits: string[];
            };
            gold: {
                name: string;
                description: string;
                benefits: string[];
            };
            elite: {
                name: string;
                description: string;
                benefits: string[];
            };
            platinum: {
                name: string;
                description: string;
                benefits: string[];
            };
        };
    };
    dashboard: {
        welcome: string;
        memberSince: string;
        excellence: string;
        myProfile: string;
        memberBenefits: string;
        status: {
            title: string;
            tierMiles: string;
            to: string;
        };
        balance: {
            title: string;
            available: string;
            redeem: string;
            history: string;
        };
        actions: {
            title: string;
            bookFlight: string;
            claimMiles: string;
            viewBenefits: string;
        };
        activity: {
            title: string;
            download: string;
            viewHistory: string;
        };
        visualizer: {
            title: string;
            subtitle: string;
            spend: string;
            miles: string;
            explore: string;
            cta: string;
        };
        pulse: {
            title: string;
            category: string;
            live: string;
            save: string;
            off: string;
            deal: string;
            nextForecast: string;
            expand: string;
        };
        network: {
            title: string;
            subtitle: string;
            partners: string;
            connections: string;
        };
        memberCard: {
            title: string;
            holder: string;
            id: string;
        };
        skyMap: {
            badge: string;
            title: string;
            subtitle: string;
            description: string;
            destinations: string;
            partners: string;
        };
    };
}
