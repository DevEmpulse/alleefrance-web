import { CountryProvider } from "@/components/country-provider";
import { WorkingHolidayGlobalLanding } from "@/components/working-holiday/global-landing";
import { WorkingHolidayLandingRedirect } from "@/components/working-holiday/working-holiday-landing-redirect";

export function WorkingHolidayLanding() {
  return (
    <CountryProvider initialCountryCode="global">
      <WorkingHolidayLandingRedirect />
      <WorkingHolidayGlobalLanding />
    </CountryProvider>
  );
}
