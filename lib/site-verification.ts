/**
 * Search engine ownership verification tokens.
 * An empty string renders no tag. Both values live here so they can be fixed in one place.
 */
export const GOOGLE_SITE_VERIFICATION = "b4FpsW9A0zPIFW_e5KykRDtw-hsTWyQ0NtBIrhorVOk";
export const BING_SITE_VERIFICATION = "";

/** Metadata `verification` field shared by the locale layout and the root redirect page. */
export const SITE_VERIFICATION = {
  ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
  ...(BING_SITE_VERIFICATION ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } } : {}),
};
