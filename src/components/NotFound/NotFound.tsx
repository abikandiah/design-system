
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "../Empty";
import { FileQuestionMark } from "lucide-react";


function NotFound({ children }: { children?: React.ReactNode }) {
	return (
		<Empty className="relative top-[100%]">
			<EmptyHeader>
				<FileQuestionMark size="128" className="mb-2" />
				<EmptyTitle className="text-3xl">404 - Not Found</EmptyTitle>
				<EmptyDescription className="text-lg">
					The page you were looking for was not found.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<EmptyDescription>
					{children}
				</EmptyDescription>
			</EmptyContent>
		</Empty>
	)
}

export { NotFound };
