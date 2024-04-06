import {Disclosure} from '@headlessui/react';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

export default function faqAccordion(props) {
	return (
		<div className="w-full px-5 md:px-10 lg:px-[152px] xl:px-0">
			<div className={`mx-auto w-full xl:max-w-[846px] bg-white p-2`}>
				<Disclosure>
					{({open}) => (
						<>
							<Disclosure.Button
								className={`flex w-full justify-between ${open ? 'rounded-t-[7px] text-purple-900' : 'rounded-[7px] '} text-black bg-faqAccordionBg px-6 py-6 text-left text-[22px] font-medium  focus:outline-none`}>
								<span>{props.title}</span>
								{open ? (
									<img src={minus} alt="minus" />
								) : (
									<img src={plus} alt="plus" />
								)}
							</Disclosure.Button>
							<Disclosure.Panel className="rounded-b-[7px] bg-faqAccordionBg px-6 pb-6 pt-0 text-[18px] text-textSecondary">
								{props.content}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
