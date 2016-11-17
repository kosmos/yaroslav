import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import CSSPlugin from 'CSSPlugin';
import CSSRulePlugin from 'CSSRulePlugin';
import animationGsap from 'animation.gsap';

const games = () => {
    const ruleForFirstLine = CSSRulePlugin.getRule(".games-of-thrones__mainname:before");
    const ruleForSecondLine = CSSRulePlugin.getRule(".games-of-thrones__shortnote:after");

    const tweenGamesLine = new TimelineMax();

    tweenGamesLine
        .fromTo(ruleForFirstLine, .8, {cssRle:{width: 0, opacity: 0}}, {cssRule:{width: 140, alpha: 1}, delay: 0.5, ease: Back.easeIn})
        // .fromTo(ruleForSecondLine, .8, {cssRle:{width: 0, opacity: 0}}, {cssRule:{width: 140, alpha: 1}, delay: 0.5, ease: Back.easeIn});
}

module.exports = games;
