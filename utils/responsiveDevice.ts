const devices = {
	mobile: '600px', //mobile devices
	tabPort: '900px', //tablets in mobile mode
	tabLand: '1200px', //tablets in mobile mode
	bigDesktop: '1800px', //
};

export const responsive = {
	mobile: `@media screen and (max-width: ${devices.mobile})`,
	tabPort: `@media screen and (max-width: ${devices.tabPort})`,
	tabLand: `@media screen and (max-width: ${devices.tabLand})`,
	bigDesktop: `@media screen and (max-width: ${devices.bigDesktop})`,
};
